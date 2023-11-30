interface LanguageInfo {
  name: string;
  nativeName: string;
}

export interface LanguagesList {
  [key: string]: LanguageInfo;
}
