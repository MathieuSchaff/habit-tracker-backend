// // frontend/src/lib/queries/habits.ts
// import {
//   queryOptions,
//   useMutation,
//   useQueryClient,
// } from "@tanstack/react-query";
// import { api, unwrap } from "../api";
// import type {
//   HabitWithRelations,
//   TodayHabit,
//   HabitStats,
// } from "../../../../backend/src/features/habits/types";
// import type {
//   CreateHabitInput,
//   UpdateHabitInput,
// } from "../../../../backend/src/features/habits/validation";
// export const habitsQueries = {
//   all: () =>
//     queryOptions({
//       queryKey: ["habits"],
//       queryFn: async () => {
//         const res = await api.habits.$get();
//         return unwrap<HabitWithRelations[]>(res);
//       },
//     }),

//   detail: (habitId: string) =>
//     queryOptions({
//       queryKey: ["habits", habitId],
//       queryFn: async () => {
//         const res = await api.habits[":habitId"].$get({ param: { habitId } });
//         return unwrap<HabitWithRelations>(res);
//       },
//     }),

//   today: () =>
//     queryOptions({
//       queryKey: ["habits", "today"],
//       queryFn: async () => {
//         const res = await api.habits.today.$get();
//         return unwrap<TodayHabit[]>(res);
//       },
//     }),

//   stats: (habitId: string, startDate: string, endDate: string) =>
//     queryOptions({
//       queryKey: ["habits", habitId, "stats", startDate, endDate],
//       queryFn: async () => {
//         const res = await api.habits[":habitId"].stats.$get({
//           param: { habitId },
//           query: { startDate, endDate },
//         });
//         return unwrap<HabitStats>(res);
//       },
//     }),
// };

// // Mutations
// export function useCreateHabit() {
//   const qc = useQueryClient();

//   return useMutation({
//     mutationFn: async (data: Omit<CreateHabitInput, "userId">) => {
//       const res = await api.habits.$post({ json: data });
//       return unwrap<HabitWithRelations>(res);
//     },
//     onSuccess: () => {
//       qc.invalidateQueries({ queryKey: ["habits"] });
//     },
//   });
// }

// export function useUpdateHabit() {
//   const qc = useQueryClient();

//   return useMutation({
//     mutationFn: async ({
//       habitId,
//       data,
//     }: {
//       habitId: string;
//       data: UpdateHabitInput;
//     }) => {
//       const res = await api.habits[":habitId"].$patch({
//         param: { habitId },
//         json: data,
//       });
//       return unwrap<HabitWithRelations>(res);
//     },
//     onSuccess: (_, { habitId }) => {
//       qc.invalidateQueries({ queryKey: ["habits"] });
//       qc.invalidateQueries({ queryKey: ["habits", habitId] });
//     },
//   });
// }

// export function useDeleteHabit() {
//   const qc = useQueryClient();

//   return useMutation({
//     mutationFn: async (habitId: string) => {
//       const res = await api.habits[":habitId"].$delete({ param: { habitId } });
//       return unwrap<null>(res);
//     },
//     onSuccess: () => {
//       qc.invalidateQueries({ queryKey: ["habits"] });
//     },
//   });
// }

// export function useToggleCheck() {
//   const qc = useQueryClient();

//   return useMutation({
//     mutationFn: async (data: {
//       habitId: string;
//       date: string;
//       timingId?: string;
//     }) => {
//       const res = await api.habits.checks.toggle.$post({ json: data });
//       return unwrap(res);
//     },
//     onSuccess: () => {
//       qc.invalidateQueries({ queryKey: ["habits", "today"] });
//       qc.invalidateQueries({ queryKey: ["habits"] });
//     },
//   });
// }
