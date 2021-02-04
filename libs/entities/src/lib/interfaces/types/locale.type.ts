export interface ILocale<T = string> {
  [key: string]: T;

  /**
   * English
   */
  en: T;

  /**
   * Russian
   */
  ru: T;
}
