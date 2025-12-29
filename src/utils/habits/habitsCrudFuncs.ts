import { eq, and, between, isNull, desc, asc, sql } from "drizzle-orm";
import { differenceInDays, startOfDay } from "date-fns";
import { db } from "../../db";
import {
  habits,
  habitFrequencies,
  habitTimings,
  habitReminders,
  habitPeriods,
  habitChecks,
  type Habit,
  type HabitFrequency,
  type HabitTiming,
  type HabitReminder,
  type HabitPeriod,
  type HabitCheck,
} from "../../db/schema/habits";
import { type CreateHabitInput, type UpdateHabitInput } from "./validation";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "../../db/schema";

type Database = NodePgDatabase<typeof schema>;

import { getToday } from "../dates";
import type { HabitStats, HabitWithRelations } from "./types";

export async function createHabit(
  input: CreateHabitInput,
  database: Database = db
): Promise<Habit> {
  return await database.transaction(async (tx) => {
    // création de l'habit
    const [habit] = await tx
      .insert(habits)
      .values({
        userId: input.userId,
        name: input.name,
        category: input.category,
      })
      .returning();
    if (!habit) {
      throw new Error("Failed to create habit");
    }

    // fréquence
    if (input.frequency) {
      await tx.insert(habitFrequencies).values({
        habitId: habit.id,
        type: input.frequency.type,
        // Accès conditionnel selon le type
        intervalDays:
          input.frequency.type === "interval"
            ? input.frequency.intervalDays
            : null,
        daysOfWeek:
          input.frequency.type === "weekly" ? input.frequency.daysOfWeek : null,
        daysOfMonth:
          input.frequency.type === "monthly"
            ? input.frequency.daysOfMonth
            : null,
      });
    }
    // timings
    if (input.timings?.length) {
      await tx.insert(habitTimings).values(
        input.timings.map((t) => ({
          habitId: habit.id,
          time: t.time,
          label: t.label,
        }))
      );
    }

    //reminders
    if (input.reminders?.length) {
      await tx.insert(habitReminders).values(
        input.reminders.map((r) => ({
          habitId: habit.id,
          beforeMinutes: r.beforeMinutes,
        }))
      );
    }

    // period
    if (input.period) {
      await tx.insert(habitPeriods).values({
        habitId: habit.id,
        startDate: input.period.startDate,
        endDate: input.period.endDate,
        activeMonths: input.period.activeMonths,
      });
    }

    return habit;
  });
}

// get une habitude par ID avec toutes ses relations
export async function getHabitById(
  habitId: string,
  database: Database = db
): Promise<HabitWithRelations | null> {
  const habit = await database.query.habits.findFirst({
    where: eq(habits.id, habitId),
  });

  if (!habit) return null;

  const [frequency, timings, reminders, period] = await Promise.all([
    database.query.habitFrequencies.findFirst({
      where: eq(habitFrequencies.habitId, habitId),
    }),
    database.query.habitTimings.findMany({
      where: eq(habitTimings.habitId, habitId),
      orderBy: asc(habitTimings.time),
    }),
    database.query.habitReminders.findMany({
      where: eq(habitReminders.habitId, habitId),
    }),
    database.query.habitPeriods.findFirst({
      where: eq(habitPeriods.habitId, habitId),
    }),
  ]);

  return {
    ...habit,
    frequency: frequency ?? null,
    timings,
    reminders,
    period: period ?? null,
  };
}

// get toutes les habitudes actives d'un user
export async function getUserHabits(
  userId: string,
  database: Database = db
): Promise<Habit[]> {
  return await database
    .select()
    .from(habits)
    .where(and(eq(habits.userId, userId), isNull(habits.archivedAt)))
    .orderBy(asc(habits.createdAt));
}

// get toutes les habitudes avec leurs relations
export async function getUserHabitsWithRelations(
  userId: string,
  database: Database = db
): Promise<HabitWithRelations[]> {
  const userHabits = await getUserHabits(userId, database);

  const habitsWithRelations = await Promise.all(
    userHabits.map((h) => getHabitById(h.id, database))
  );

  return habitsWithRelations.filter((h): h is HabitWithRelations => h !== null);
}

// Mettre à jour une habitude
export async function updateHabit(
  habitId: string,
  input: UpdateHabitInput,
  database: Database = db
): Promise<Habit | null> {
  const [updated] = await database
    .update(habits)
    .set({
      ...input,
      updatedAt: new Date(),
    })
    .where(eq(habits.id, habitId))
    .returning();

  return updated ?? null;
}

// Archiver une habitude (soft delete)
export async function archiveHabit(
  habitId: string,
  database: Database = db
): Promise<Habit | null> {
  const [archived] = await database
    .update(habits)
    .set({
      archivedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(habits.id, habitId))
    .returning();

  return archived ?? null;
}

// Restaurer une habitude archivée
export async function restoreHabit(
  habitId: string,
  database: Database = db
): Promise<Habit | null> {
  const [restored] = await database
    .update(habits)
    .set({
      archivedAt: null,
      updatedAt: new Date(),
    })
    .where(eq(habits.id, habitId))
    .returning();

  return restored ?? null;
}

// Supprimer habitude
export async function deleteHabit(
  habitId: string,
  database: Database = db
): Promise<boolean> {
  const result = await database.delete(habits).where(eq(habits.id, habitId));
  return (result.rowCount ?? 0) > 0;
}

// FRéquence

// mise a jour fréquence d'une habitude
export async function updateHabitFrequency(
  habitId: string,
  input: {
    type: "daily" | "weekly" | "monthly" | "interval";
    intervalDays?: number;
    daysOfWeek?: string[];
    daysOfMonth?: number[];
  },
  database: Database = db
): Promise<HabitFrequency> {
  // Upsert : insert ou update
  const [frequency] = await database
    .insert(habitFrequencies)
    .values({
      habitId,
      type: input.type,
      intervalDays: input.intervalDays,
      daysOfWeek: input.daysOfWeek,
      daysOfMonth: input.daysOfMonth,
    })
    .onConflictDoUpdate({
      target: habitFrequencies.habitId,
      set: {
        type: input.type,
        intervalDays: input.intervalDays,
        daysOfWeek: input.daysOfWeek,
        daysOfMonth: input.daysOfMonth,
        updatedAt: new Date(),
      },
    })
    .returning();
  if (!frequency) {
    throw new Error(`Failed to upsert frequency for habit ${habitId}`);
  }
  return frequency;
}

// Timings
// Ajouter un timing à une habitude
export async function addHabitTiming(
  habitId: string,
  time: string,
  label?: string,
  database: Database = db
): Promise<HabitTiming> {
  const [timing] = await database
    .insert(habitTimings)
    .values({ habitId, time, label })
    .returning();
  if (!timing) {
    throw new Error(
      `Failed to add a timing habit for habit ${label}, with habitId: ${habitId}`
    );
  }
  return timing;
}

// Supprimer un timing
export async function deleteHabitTiming(
  timingId: string,
  database: Database = db
): Promise<boolean> {
  const result = await database
    .delete(habitTimings)
    .where(eq(habitTimings.id, timingId));
  return (result.rowCount ?? 0) > 0;
}

// Remplacer tous les timings d'une habitude
export async function setHabitTimings(
  habitId: string,
  timings: { time: string; label?: string }[],
  database: Database = db
): Promise<HabitTiming[]> {
  return await database.transaction(async (tx) => {
    // Supprimer les anciens
    await tx.delete(habitTimings).where(eq(habitTimings.habitId, habitId));

    if (timings.length === 0) return [];

    // Insérer les nouveaux
    return await tx
      .insert(habitTimings)
      .values(timings.map((t) => ({ habitId, time: t.time, label: t.label })))
      .returning();
  });
}

// Reminders ('les rappels)

// Ajouter un reminder
export async function addHabitReminder(
  habitId: string,
  beforeMinutes: number,
  database: Database = db
): Promise<HabitReminder> {
  const [reminder] = await database
    .insert(habitReminders)
    .values({ habitId, beforeMinutes })
    .returning();

  if (!reminder) {
    throw new Error(`Failed to add a reminder habit for habit ${habitId}`);
  }
  return reminder;
}

// Supprimer un reminder
export async function deleteHabitReminder(
  reminderId: string,
  database: Database = db
): Promise<boolean> {
  const result = await database
    .delete(habitReminders)
    .where(eq(habitReminders.id, reminderId));
  return (result.rowCount ?? 0) > 0;
}

// Remplacer tous les reminders d'une habitude
export async function setHabitReminders(
  habitId: string,
  reminders: { beforeMinutes: number }[],
  database: Database = db
): Promise<HabitReminder[]> {
  return await database.transaction(async (tx) => {
    await tx.delete(habitReminders).where(eq(habitReminders.habitId, habitId));

    if (reminders.length === 0) return [];

    return await tx
      .insert(habitReminders)
      .values(
        reminders.map((r) => ({ habitId, beforeMinutes: r.beforeMinutes }))
      )
      .returning();
  });
}

// Périodes

// Créer ou update à jour la période d'une habitude
export async function setHabitPeriod(
  habitId: string,
  period: {
    startDate?: string;
    endDate?: string;
    activeMonths?: number[];
  },
  database: Database = db
): Promise<HabitPeriod> {
  const [result] = await database
    .insert(habitPeriods)
    .values({
      habitId,
      startDate: period.startDate,
      endDate: period.endDate,
      activeMonths: period.activeMonths,
    })
    .onConflictDoUpdate({
      target: habitPeriods.habitId,
      set: {
        startDate: period.startDate,
        endDate: period.endDate,
        activeMonths: period.activeMonths,
        updatedAt: new Date(),
      },
    })
    .returning();

  if (!result) {
    throw new Error(`Failed to add an habit period for habit ${habitId}`);
  }
  return result;
}

// Supprimer la période d'une habitude
export async function deleteHabitPeriod(
  habitId: string,
  database: Database = db
): Promise<boolean> {
  const result = await database
    .delete(habitPeriods)
    .where(eq(habitPeriods.habitId, habitId));
  return (result.rowCount ?? 0) > 0;
}

// CHECKS - Le cœur du tracking

// Marquer une habitude comme faite
export async function checkHabit(
  input: {
    userId: string;
    habitId: string;
    date: string; // "2025-01-15"
    timingId?: string;
    actualTime?: string; // "08:15"
  },
  database: Database = db
): Promise<HabitCheck> {
  const [check] = await database
    .insert(habitChecks)
    .values({
      userId: input.userId,
      habitId: input.habitId,
      date: input.date,
      timingId: input.timingId,
      actualTime: input.actualTime,
    })
    .returning();
  if (!check) {
    throw new Error(`failed to check habit ${input.habitId}`);
  }
  return check;
}

// Annuler un check
export async function uncheckHabit(
  checkId: string,
  database: Database = db
): Promise<boolean> {
  const result = await database
    .delete(habitChecks)
    .where(eq(habitChecks.id, checkId));
  return (result.rowCount ?? 0) > 0;
}

// Annuler un check par habitId + date (pour les habitudes "anytime")
export async function uncheckHabitByDate(
  habitId: string,
  date: string,
  database: Database = db
): Promise<boolean> {
  const result = await database
    .delete(habitChecks)
    .where(and(eq(habitChecks.habitId, habitId), eq(habitChecks.date, date)));
  return (result.rowCount ?? 0) > 0;
}

// Récupérer les checks d'un utilisateur pour une date
export async function getUserChecksForDate(
  userId: string,
  date: string,
  database: Database = db
): Promise<HabitCheck[]> {
  return await database
    .select()
    .from(habitChecks)
    .where(and(eq(habitChecks.userId, userId), eq(habitChecks.date, date)));
}

// Récupérer les checks d'une habitude sur une période
export async function getHabitChecks(
  habitId: string,
  startDate: string,
  endDate: string,
  database: Database = db
): Promise<HabitCheck[]> {
  return await database
    .select()
    .from(habitChecks)
    .where(
      and(
        eq(habitChecks.habitId, habitId),
        between(habitChecks.date, startDate, endDate)
      )
    )
    .orderBy(asc(habitChecks.date));
}

// Vérifier si une habitude est faite pour une date donnée
export async function isHabitChecked(
  habitId: string,
  date: string,
  database: Database = db
): Promise<boolean> {
  const check = await database.query.habitChecks.findFirst({
    where: and(eq(habitChecks.habitId, habitId), eq(habitChecks.date, date)),
  });
  return !!check;
}

// Toggle : check si pas fait, uncheck si déjà fait
export async function toggleHabitCheck(
  input: {
    userId: string;
    habitId: string;
    date: string;
    timingId?: string;
    actualTime?: string;
  },
  database: Database = db
): Promise<{ checked: boolean; check?: HabitCheck }> {
  const existing = await database.query.habitChecks.findFirst({
    where: and(
      eq(habitChecks.habitId, input.habitId),
      eq(habitChecks.date, input.date),
      input.timingId
        ? eq(habitChecks.timingId, input.timingId)
        : isNull(habitChecks.timingId)
    ),
  });

  if (existing) {
    await uncheckHabit(existing.id, database);
    return { checked: false };
  } else {
    const check = await checkHabit(input, database);
    return { checked: true, check };
  }
}

// STATISTIQUES

// Compter les checks d'une habitude sur une période
export async function countHabitChecks(
  habitId: string,
  startDate: string,
  endDate: string,
  database: Database = db
): Promise<number> {
  const result = await database
    .select({ count: sql<number>`count(*)::int` })
    .from(habitChecks)
    .where(
      and(
        eq(habitChecks.habitId, habitId),
        between(habitChecks.date, startDate, endDate)
      )
    );

  return result[0]?.count ?? 0;
}

// Calculer le streak actuel d'une habitude (jours consécutifs)
export async function getHabitStreak(
  habitId: string,
  database: Database = db
): Promise<number> {
  const checks = await database
    .select({ date: habitChecks.date })
    .from(habitChecks)
    .where(eq(habitChecks.habitId, habitId))
    .orderBy(desc(habitChecks.date));

  if (checks.length === 0) return 0;

  let streak = 0;
  let expectedDate = startOfDay(new Date());

  for (const check of checks) {
    const checkDate = startOfDay(new Date(check.date));

    // differenceInDays retourne un nombre positif si expectedDate > checkDate
    const diff = differenceInDays(expectedDate, checkDate);

    // si c'est aujourd'hui (diff = 0) ou hier (diff = 1), on continue le streak
    if (diff === 0 || diff === 1) {
      streak++;
      expectedDate = checkDate;
    } else {
      // trou dans le streak, on arrête
      break;
    }
  }

  return streak;
}

// Statistiques globales d'une habitude
export async function getHabitStats(
  habitId: string,
  startDate: string,
  endDate: string,
  database: Database = db
): Promise<HabitStats> {
  const [totalChecks, currentStreak] = await Promise.all([
    countHabitChecks(habitId, startDate, endDate, database),
    getHabitStreak(habitId, database),
  ]);

  // nb de jours entre les deux dates
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalDays = differenceInDays(end, start) + 1;

  const completionRate = totalDays > 0 ? (totalChecks / totalDays) * 100 : 0;

  return {
    totalChecks,
    currentStreak,
    completionRate: Math.round(completionRate * 10) / 10,
  };
}

// HELPERS - Habitudes du jour

// Récupérer les habitudes actives pour aujourd'hui avec leur statut
export async function getTodayHabits(
  userId: string,
  database: Database = db
): Promise<
  Array<{
    habit: Habit;
    timings: HabitTiming[];
    checks: HabitCheck[];
    isCompleted: boolean;
  }>
> {
  const today = getToday();
  const currentMonth = new Date().getMonth() + 1; // 1-12

  // Récupérer habitudes actives
  const userHabits = await getUserHabitsWithRelations(userId, database);

  // Filtrer par période active
  const activeHabits = userHabits.filter((h) => {
    if (!h.period) return true;

    // Vérifier mois actifs
    if (h.period.activeMonths?.length) {
      if (!h.period.activeMonths.includes(currentMonth)) return false;
    }

    // Vérifier dates
    if (h.period.startDate && today < h.period.startDate) return false;
    if (h.period.endDate && today > h.period.endDate) return false;

    return true;
  });

  // Récupérer les checks du jour
  const todayChecks = await getUserChecksForDate(userId, today, database);
  const checksByHabit = new Map<string, HabitCheck[]>();
  todayChecks.forEach((c) => {
    const existing = checksByHabit.get(c.habitId) ?? [];
    existing.push(c);
    checksByHabit.set(c.habitId, existing);
  });

  return activeHabits.map((h) => {
    const checks = checksByHabit.get(h.id) ?? [];
    const requiredCount = h.timings.length || 1;
    const isCompleted = checks.length >= requiredCount;

    return {
      habit: h,
      timings: h.timings,
      checks,
      isCompleted,
    };
  });
}
