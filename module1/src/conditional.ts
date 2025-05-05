{
  //Conditional type: Types that depend on other types

  type Sheikh = {
    car: string;
    bike: string;
    ship: string;
  };

  type DependType<T> = T extends keyof Sheikh ? true : false;

  type Result1 = DependType<"car">;
}
