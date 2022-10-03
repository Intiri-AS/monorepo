

export class Moodboard {
  name: string;
  description: string;
  designer: any
  style: Array<object>
  room: Array<any>;
  colorPalettes: Array<any>
  materials: Array<any>;
  products: Array<any>;
  
  constructor() {
    this.name = '';
    this.description = '';
    this.designer = null;
    this.style = [];
    this.room = [];
    this.materials = [];
    this.products = [];
  }
}
