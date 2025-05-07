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

  const createTupleWithGenerics = <T, Q>(params1: T, params2: Q): [T, Q] => {
    return [params1, params2];
  };

  const res1 = createArray("Hello");
  const res2 = createArrayWithGenerics<Person>({ name: "Shanta", age: 26 });
  const res3 = createTupleWithGenerics<string, number>("Shanta", 26);
}
