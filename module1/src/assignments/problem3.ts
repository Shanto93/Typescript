{
  //Problem 3
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, array) => acc.concat(array, []));
  }

  const result = concatenateArrays(['a', 'b'], ['c', 'd'], ['e', 'f']);
  console.log(result);
}
