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
  created: any;
  roomDetails?: {
    shape: string;
    size: number;
    budgetRate: number;
    roomSketchFile: string;
  };

  constructor()
  {
    this.id = null;
    this.sourceMoodboardId = null;
    this.name = '';
    this.description = '';
    this.designer = null;
    this.style = null;
    this.room = null;
    this.colorPalettes = [];
    this.materials = [];
    this.products = [];
    this.created = null;
    this.roomDetails = {
      shape: '',
      size: null,
      budgetRate: null,
      roomSketchFile: ''
    };
  }
}
