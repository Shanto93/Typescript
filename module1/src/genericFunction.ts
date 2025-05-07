{
  const createArray = (params: string) => {
    return [params];
  };

  type Person = {
    name: string;
    age: number;
  };
  const createArrayWithGenerics = <T>(params: T): Array<T> => {
    return [params];
  };

  const res1 = createArray("Hello");
  const res2 = createArrayWithGenerics<Person>({ name: "Shanta", age: 23 });
}
