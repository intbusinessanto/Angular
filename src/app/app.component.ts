import { Component } from '@angular/core';

import { Product } from './product.model'; // Import the Product interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  title = 'my-store';
  name = 'Santo';
  age = 30;
  img = 'https://picsum.photos/200';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: '',
  }
  person = {
    name: 'Santiago',
    age: 33,
    avatar: 'https://picsum.photos/200'
  }
  names: string[] = ['Santi', 'Dani', 'Avis', 'Juandi'];
  newName = '';
  products: Product[] = [
    {
      name: 'Camisa Polo',
      price: 120,
      Image: 'https://picsum.photos/200',
      category: 'Peo'
    },
    {
      name: 'Camisa Pala',
      price: 121,
      Image: 'https://picsum.photos/200'
    },
    {
      name: 'Camisa Pele',
      price: 122,
      Image: 'https://picsum.photos/200'
    },
    {
      name: 'Camisa Pili',
      price: 123,
      Image: 'https://picsum.photos/200'
    },
    {
      name: 'Camisa Pulu',
      price: 124,
      Image: 'https://picsum.photos/200'
    },
    {
      name: 'Camisa Pola',
      price: 125,
      Image: 'https://picsum.photos/200'
    },
    {
      name: 'Camisa Pole',
      price: 126,
      Image: 'https://picsum.photos/200'
    },
    {
      name: 'Camisa Poli',
      price: 127,
      Image: 'https://picsum.photos/200'
    },
    {
      name: 'Camisa Polu',
      price: 128,
      Image: 'https://picsum.photos/200'
    },
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age ++;
  }

  onScroll(event: Event)
  {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event)
  {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }
}
