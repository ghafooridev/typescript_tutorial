interface IAnimal {
  id: number;
  name: string;
  age?: number;
}

const animal: Required<IAnimal> = {
  id: 123,
  name: "bear",
  age: 10,
};

export {};
