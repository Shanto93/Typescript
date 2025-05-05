{
  //mapped:

  const numArr: number[] = [1, 2, 3, 4, 5];

  const toString = numArr.map((num) => num.toString());
  console.log(toString);

  type Man = {
    name: string;
    age: string;
    isMarried: string;
  };

  type toBoolean<T> = {
    [index in keyof T]: T[index];
  };

  const Result: toBoolean<{ name: string; age: number; isMarried: boolean }> = {
    name: "ALi",
    age: 23,
    isMarried: true,
  };
  console.log(Result);
}
