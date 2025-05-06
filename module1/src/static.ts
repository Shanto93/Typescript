{
  //Static in TypeScript

  class Counter {
    static count: number = 0;

    static increment() {
      Counter.count = Counter.count + 1;
    }
    static decrement() {
      Counter.count = Counter.count - 1;
    }
  }

  console.log(Counter.increment());
}
