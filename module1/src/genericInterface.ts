interface Developer<T> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartwatch: T;
}

interface AppleWatch {
  brand: string;
  model: string;
}
interface SonyWatch {
  brand: string;
  model: string;
  releaseYear: number;
}

const developer1: Developer<AppleWatch> = {
  name: "Shanta",
  computer: {
    brand: "Dell",
    model: "Dell Latitude",
    releaseYear: 2020,
  },
  smartwatch: {
    brand: "Apple",
    model: "Apple Watch Series 7",
  },
};
const developer2: Developer<SonyWatch> = {
  name: "Shanta",
  computer: {
    brand: "Dell",
    model: "Dell Latitude",
    releaseYear: 2020,
  },
  smartwatch: {
    brand: "Apple",
    model: "Apple Watch Series 7",
    releaseYear: 2020,
  },
};
