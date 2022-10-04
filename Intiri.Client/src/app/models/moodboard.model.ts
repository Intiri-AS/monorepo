export class Moodboard {
  name: string;
  description: string;
  designer: any;
  style: Array<any>
  room: Array<any>;
  colorPalettes: Array<any>;
  materials: Array<any>;
  products: Array<any>;
  
  constructor(
    name?: string,
    description?: string,
    designer?: any,
    style?: Array<object>,
    room?: Array<any>,
    colorPalettes?: Array<any>,
    materials?: Array<any>,
    products?: Array<any>) 
  {
    this.name = name;
    this.description = description;
    this.designer = designer;
    this.style = style;
    this.room = room;
    this.colorPalettes = colorPalettes;
    this.materials = materials;
    this.products = products;
  }
}
