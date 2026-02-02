import { create, createStore } from 'zustand'

interface UIState {
  // Modal création/édition habit
  habitModalOpen: boolean
  editingHabitId: string | null
  openHabitModal: (habitId?: string) => void
  closeHabitModal: () => void

  // Date sélectionnée
  selectedDate: Date
  setSelectedDate: (date: Date) => void

  // Vue (day/week/month)
  view: 'day' | 'week' | 'month'
  setView: (view: 'day' | 'week' | 'month') => void

  // Sidebar
  sidebarOpen: boolean
  toggleSidebar: () => void
}

// export const useUIStore = create<UIState>((set) => ({
//   habitModalOpen: false,
//   editingHabitId: null,
//   openHabitModal: (habitId) =>
//     set({
//       habitModalOpen: true,
//       editingHabitId: habitId ?? null,
//     }),
//   closeHabitModal: () =>
//     set({
//       habitModalOpen: false,
//       editingHabitId: null,
//     }),

//   selectedDate: new Date(),
//   setSelectedDate: (date) => set({ selectedDate: date }),

//   view: "day",
//   setView: (view) => set({ view }),

//   sidebarOpen: true,
//   toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
// }));
//
type Theme = 'dark' | 'light'
export const store = createStore<Theme>()
