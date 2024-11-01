export interface TypeData {
  key: number;
  index: number;
  label: string;
  data: string;
  mergedList: string[];
  separatedList: string[];
  definitionList?: {
    index: number;
    dt: string;
    dd: string;
  }[];
}

export interface TypeInquiryValues {
  username: string;
  age: string;
  gender: string;
  email: string;
  subject: string;
  content: string;
}
