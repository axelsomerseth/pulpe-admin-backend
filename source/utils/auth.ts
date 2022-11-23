import { createHash } from "crypto";

const hash = (string: string): string => {
  return createHash("sha256").update(string).digest("hex");
};

export { hash };
