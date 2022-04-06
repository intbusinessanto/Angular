const username: string = 'santo';
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 2);

class Person {

  constructor(public age: number, public lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const santo = new Person( 33, 'Rodriguez');

santo.age;
