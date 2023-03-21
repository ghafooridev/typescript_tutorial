interface IAnimal {
  id: number;
  name: string;
}

// ! const animal: IAnimal = {};

// * solution 1
const animal1: IAnimal = {} as IAnimal;

// * solution 2
const animal2: Partial<IAnimal> = {};

// * solution 3
const animal3: IAnimal | Record<string, never> = {};
