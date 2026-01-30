// import { zValidator } from "@hono/zod-validator";
// import z, { treeifyError } from "zod";
// import { ApiError, err, HTTP_STATUS } from "../types/api";

// import { type ApiError, err, HTTP_STATUS } from "@habit-tracker/shared";
export type ValidationTarget = "json" | "query" | "param" | "form" | "header";
// export const validate = <T extends z.ZodSchema, E extends string>(
//   target: ValidationTarget,
//   schema: T,

// ) =>
//   zValidator(target, schema, (result, c) => {
//     if (!result.success) {
//       return c.json<ApiError<E>>(
//         err("", treeifyError(result.error)),
//         HTTP_STATUS.BAD_REQUEST
//       );
//     }
//   });
