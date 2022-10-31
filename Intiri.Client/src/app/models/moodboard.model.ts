export class Moodboard {
  id: number;
  sourceMoodboardId: number;
  name: string;
  description: string;
  designer: any;
  style: any;
  room: object;
  colorPalettes: Array<any>;
  materials: Array<any>;
  products: Array<any>;
  created: any

  constructor()
  {
    this.id = null;
    this.sourceMoodboardId = null;
    this.name = ''
    this.description = '';
    this.designer = null;
    this.style = null;
    this.room = null;
    this.colorPalettes = [];
    this.materials = [];
    this.products = [];
    this.created = null;
  }
}
