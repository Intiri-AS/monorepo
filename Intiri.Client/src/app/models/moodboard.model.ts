export class Moodboard {
  name: string;
  description: string;
  designer: any;
  style: object;
  room: object;
  colorPalettes: Array<any>;
  materials: Array<any>;
  products: Array<any>;

  constructor()
  {
    this.name = ''
    this.description = '';
    this.designer = null;
    this.style = null;
    this.room = null;
    this.colorPalettes = [];
    this.materials = [];
    this.products = [];
  }
}
