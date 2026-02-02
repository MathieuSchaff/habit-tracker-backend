export const habitFixtures = {
  basic: {
    name: 'Exercice matinal',
    category: 'health' as const,
  },

  withDaily: {
    name: "Boire de l'eau",
    category: 'health' as const,
    frequency: { type: 'daily' as const },
  },

  withWeekly: {
    name: 'Séance de sport',
    category: 'health' as const,
    frequency: {
      type: 'weekly' as const,
      daysOfWeek: ['monday', 'wednesday', 'friday'] as const,
    },
  },

  complete: {
    name: 'Habitude complète',
    category: 'health' as const,
    frequency: {
      type: 'weekly' as const,
      daysOfWeek: ['monday', 'friday'] as const,
    },
    timings: [{ time: '07:00', label: 'Matin' }],
    reminders: [{ beforeMinutes: 10 }],
    period: {
      startDate: '2025-01-01',
      activeMonths: [1, 2, 3],
    },
  },
}
