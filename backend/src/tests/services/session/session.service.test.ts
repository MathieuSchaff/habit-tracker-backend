import { describe, it, expect, beforeEach } from "bun:test";
import { createTestUser } from "../../helpers/test-factories";
import {
  createSession,
  findValidSessionBySidHash,
  revokeSession,
  updateLastSeen,
} from "../../../features/auth/session.service";
import { hashSid, generateSid } from "../../../features/auth/utils";
import { testDb } from "../../db.test.config";
describe("Session Service", () => {
  let testUser: any;

  beforeEach(async () => {
    testUser = await createTestUser();
  });

  describe("createSession", () => {
    it("should create a session successfully", async () => {
      const sid = generateSid();
      const sidHash = hashSid(sid);
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

      await createSession(testDb, {
        userId: testUser.id,
        sidHash,
        expiresAt,
      });
      const validSession = await findValidSessionBySidHash(testDb, sidHash);
      expect(validSession).not.toBeNull();
      if (!validSession) {
        throw new Error("Session was not created in database");
      }

      expect(validSession.sidHash).toBe(sidHash);
      expect(validSession.revokedAt).toBeNull();
      expect(validSession.userId).toBe(testUser.id);
    });

    it("should create session with IP and user agent", async () => {
      const sid = generateSid();
      const sidHash = hashSid(sid);

      await createSession(testDb, {
        userId: testUser.id,
        sidHash,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        ip: "192.168.1.1",
        userAgent: "Mozilla/5.0",
      });
      const validSession = await findValidSessionBySidHash(testDb, sidHash);
      expect(validSession).not.toBeNull();
      if (!validSession) {
        throw new Error("Session was not created in database");
      }
      expect(validSession.ip).toBe("192.168.1.1");
      expect(validSession.userAgent).toBe("Mozilla/5.0");
    });
  });

  describe("findValidSessionBySidHash", () => {
    it("should find valid session", async () => {
      const sid = generateSid();
      const sidHash = hashSid(sid);
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

      await createSession(testDb, {
        userId: testUser.id,
        sidHash,
        expiresAt,
      });

      const found = await findValidSessionBySidHash(testDb, sidHash);

      expect(found).toBeDefined();
      expect(found?.userId).toBe(testUser.id);
    });

    it("should not find revoked session", async () => {
      const sid = generateSid();
      const sidHash = hashSid(sid);

      await createSession(testDb, {
        userId: testUser.id,
        sidHash,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });

      await revokeSession(testDb, sidHash);

      const found = await findValidSessionBySidHash(testDb, sidHash);
      expect(found).toBeNull();
    });

    it("should not find expired session", async () => {
      const sid = generateSid();
      const sidHash = hashSid(sid);
      const expiresAt = new Date(Date.now() - 1000); // Expiré

      await createSession(testDb, {
        userId: testUser.id,
        sidHash,
        expiresAt,
      });

      const found = await findValidSessionBySidHash(testDb, sidHash);
      expect(found).toBeNull();
    });
  });

  describe("revokeSession", () => {
    it("should revoke a session", async () => {
      const sid = generateSid();
      const sidHash = hashSid(sid);

      await createSession(testDb, {
        userId: testUser.id,
        sidHash,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });

      await revokeSession(testDb, sidHash);
      const found = await findValidSessionBySidHash(testDb, sidHash);
      expect(found).toBeNull();
    });
  });

  describe("updateLastSeen", () => {
    it("should update lastSeenAt timestamp", async () => {
      const sid = generateSid();
      const sidHash = hashSid(sid);

      await createSession(testDb, {
        userId: testUser.id,
        sidHash,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      });
      const session = await findValidSessionBySidHash(testDb, sidHash);
      if (!session) {
        throw new Error("session not found");
      }
      expect(session.lastSeenAt).toBeNull();

      await updateLastSeen(testDb, sidHash);

      const session2 = await findValidSessionBySidHash(testDb, sidHash);
      if (!session) {
        throw new Error("session not found");
      }
      expect(session2?.lastSeenAt).toBeDefined();
      expect(session2?.lastSeenAt).toBeInstanceOf(Date);
    });
  });
});
