import { makeAutoObservable } from "mobx";

export default class CounterStore {
  counter: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
}
