// this syntax is equals to "en" | "es" | "it"
export const SUPPORTED_LANGUAGES = ["en", "es", "pt-br", "it"];

export type Language = typeof SUPPORTED_LANGUAGES[number];
