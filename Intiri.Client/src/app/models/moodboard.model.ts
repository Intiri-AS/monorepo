export class Moodboard {
  name: string;
  description: string;
  designer: object;
  style: object;
  room: object;
  materials: [];
  products: [];
  colorPalettes: [];

  //TODO This is example for User model

  constructor() {
    this.name = '';
    this.description = null;
    this.designer = null;
    this.room = null;
    this.style = null;
    this.materials = [];
    this.colorPalettes = [];
    this.products = [];
  }
}
