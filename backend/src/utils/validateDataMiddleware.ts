import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { err, HTTP_STATUS, type ApiError } from "@habit-tracker/shared";

export type ValidationTarget = "json" | "query" | "param" | "form" | "header";

export const validate = <T extends z.ZodType>(
  target: ValidationTarget,
  schema: T
) =>
  zValidator(target, schema, (result, c) => {
    if (!result.success) {
      return c.json<ApiError<"invalid_input">>(
        err("invalid_input", z.flattenError(result.error)),
        HTTP_STATUS.BAD_REQUEST
      );
    }
  });

export const validateJson = <T extends z.ZodType>(schema: T) =>
  validate("json", schema);
