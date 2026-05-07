export type Language = "en" | "es";

export type LocalizedText = {
  en: string;
  es: string;
};

export function resolveText(
  value: LocalizedText | string,
  language: Language
) {
  if (typeof value === "string") {
    return value;
  }

  return value[language];
}
