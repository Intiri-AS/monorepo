

export class Moodboard {
  name: string;
  description: string;
  style: Array<object>
  room: Array<any>;
  materials: Array<any>;
  products: Array<any>;
  
  constructor() {
    this.name = '';
    this.description = '';
    this.style = [];
    this.room = [];
    this.materials = [];
    this.products = [];
  }
}