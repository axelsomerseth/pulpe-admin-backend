import { createHash } from "crypto";

const hash256 = (string: string): string => {
  return createHash("sha256").update(string).digest("hex");
};

export { hash256 };
