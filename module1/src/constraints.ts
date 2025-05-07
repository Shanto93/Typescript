{
  interface Cons {
    name: string;
    age: number;
    address: string;
  }
  const user = <T extends Cons>(params: T): Array<T> => {
    return [params];
  };

  interface PersonalInfo1 {
    name: string;
    age: number;
    isMarried: boolean;
    address: string;
  }

  const res1 = user<PersonalInfo1>({
    name: "Shanta",
    age: 26,
    isMarried: true,
    address: "Narsingdi",
  });
  const res2 = user({
    name: "Sanjida",
    age: 26,
    address: "Chattogram",
    isMarried: true,
  });
}
