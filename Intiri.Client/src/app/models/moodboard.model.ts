export class Moodboard {
  id: number;
  sourceMoodboardId: number;
  name: string;
  description: string;
  designer: any;
  room: object;
  style: any;
  inspirationalPhotos: Array<any>;
  colorPalettes: Array<any>;
  materials: Array<any>;
  products: Array<any>;
  created: any;
  roomDetails?: {
    roomSketchFile: string;
  };
  slotInfo: {}

  constructor()
  {
    this.id = null;
    this.sourceMoodboardId = null;
    this.name = '';
    this.description = '';
    this.designer = null;
    this.room = null;
    this.style = null;
    this.inspirationalPhotos = [];
    this.colorPalettes = [];
    this.materials = [];
    this.products = [];
    this.created = null;
    this.roomDetails = {
      roomSketchFile: ''
    };
    this.slotInfo = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null, // This is initially mapped to product 1
      8: null, // This is initially mapped to product 2
      9: null,
      10: null, // This is initially mapped to material 1
      11: null, // This is initially mapped to material 2
      12: null, // This is initially mapped to material 3
      13: null, // This is initially mapped to material 4
      14: null,
      15: null,
    }
  }
}
