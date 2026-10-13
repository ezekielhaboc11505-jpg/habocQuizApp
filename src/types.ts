export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type IsString<T> = T extends string ? true : false;

export const isString = <T,>(value: T): IsString<T> =>
  (typeof value === "string") as IsString<T>;
