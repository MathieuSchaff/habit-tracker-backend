import { describe, it, expect } from "bun:test";
import { randomUUID } from "crypto";
import { testDb } from "../../db.test.config";
import { createTestUser } from "../../helpers/test-factories";
import { getUser, createUser } from "../../../features/auth/user.utils";
import { hash } from "argon2";
import { getProfile } from "../../../features/profile";

describe("User Utils", () => {
  describe("getUser", () => {
    it("should find user by email", async () => {
      await createTestUser({ email: "find@example.com" });

      const user = await getUser(testDb, "find@example.com");

      expect(user).toBeDefined();
      expect(user?.email).toBe("find@example.com");
    });

    it("should return null for non-existent email", async () => {
      const user = await getUser(testDb, "notfound@example.com");
      expect(user).toBeNull();
    });
  });

  describe("createUser", () => {
    it("should create a new user", async () => {
      const passwordHash = await hash("TestPass123!");

      const user = await createUser(testDb, {
        email: "newuser@example.com",
        passwordHash,
      });

      expect(user).toBeDefined();
      expect(user?.email).toBe("newuser@example.com");
      expect(user?.passwordHash).toBe(passwordHash);
    });

    it("should normalize email to lowercase", async () => {
      const passwordHash = await hash("TestPass123!");

      const user = await createUser(testDb, {
        email: "UpperCase@Example.COM",
        passwordHash,
      });

      expect(user?.email).toBe("uppercase@example.com");
    });
  });

  describe("getProfile", () => {
    it("should find profile by userId", async () => {
      const user = await createTestUser();
      const profile = await getProfile(testDb, user.id);

      expect(profile).toBeDefined();
      expect(profile?.userId).toBe(user.id);
    });

    it("should return null if profile doesn't exist", async () => {
      const fakeId = randomUUID();

      const profile = await getProfile(testDb, fakeId);
      expect(profile).toBeNull();
    });
  });
});
