{
  //Conditional type: Retuen a type based on condion of another type

  type Sheikh = {
    car: string;
    bike: string;
    ship: string;
  };

  type DependType<T> = T extends keyof Sheikh ? true : false;

  type Result1 = DependType<"car">;
}
