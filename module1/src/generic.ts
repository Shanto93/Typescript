type GenericArray<T> = Array<T>;

type Person = {
  name: string;
  age: number;
  address: string;
};

const numberArray: GenericArray<number> = [1, 2, 3, 4, 5, 6];

const stringArray: GenericArray<string> = ["a", "b", "c", "d"];

const booleanArray: GenericArray<boolean> = [true, false, false, true];

const onjectArray: GenericArray<Person> = [
  { name: "Shanta", age: 26, address: "Narsingdi" },
  { name: "Sanjida", age: 26, address: "Chattogram" },
];

type GenericTuple<X, Y> = [X, Y];
type Info = {
  age: number;
  address: string;
};
const personTuple: GenericTuple<string, number> = ["Shanta", 26];
const personTuple2: GenericTuple<string, Info> = [
  "Sanjida",
  { age: 26, address: "Chattogram" },
];
