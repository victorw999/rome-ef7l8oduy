export default interface Unit {
  name: string;
  size: number;
  defence: number;
  attack_power: number;
  attack(target: Unit): void;
  isDisabled(): boolean;
  print(): void;
}

// demo how a class uses "implements" on interface
interface Scaffold {
  propA: string;
  func(arg: number): void;
}

// "implements" is like adding meat to a bare-bones scaffolding
class Building implements Scaffold {
  propA: string;

  constructor(propA: string) {
    this.propA = propA;
  }
  func(arg: number) {}
}

let foo = new Building('xxx');
