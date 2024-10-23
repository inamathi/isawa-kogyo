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

export interface TypeInqueryValues {
  username: string;
  age: number;
  gender: string;
  email: string;
  subject: string;
  content: string;
}
