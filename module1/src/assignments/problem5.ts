{
  //Problem 5
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  const result = processValue(10);
  console.log(result);
}
