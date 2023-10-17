
export enum SlotInfoEntityTypes {
  material = 'material',
  styleImages = 'styleImages',
  product = 'product',
  color = 'color'
};

export type SlotInfo = {
  entity?: string;
  entityId?: string | number;
  entityName?: string;
  entityImagePath?: string;
  entityImageStyles?: {
    height: string;
    width: string;
    top: string;
    left: string;
  };
};

export class Moodboard {
  id: number;
  sourceMoodboardId: number;
  name: string;
  description: string;
  designer: any;
  room: any;
  style: any;
  styleImages: Array<any>;
  colorPalettes: Array<any>;
  materials: Array<any>;
  products: Array<any>;
  created: any;
  roomDetails?: {
    roomSketchFile: string;
  };
  SLOT_COUNT: number = 16;
  slotInfo: {[index: string]: SlotInfo} = null;

  constructor()
  {
    this.id = null;
    this.sourceMoodboardId = null;
    this.name = '';
    this.description = '';
    this.designer = null;
    this.room = null;
    this.style = null;
    this.styleImages = [];
    this.colorPalettes = [];
    this.materials = [];
    this.products = [];
    this.created = null;
    this.roomDetails = {
      roomSketchFile: ''
    };

    this.slotInfo = {};
    for (let i = 0; i < this.SLOT_COUNT; i++) {
      this.slotInfo[i] = {
        entity: null,
        entityId: null,
        entityName: null,
        entityImagePath: null,
        entityImageStyles: {
          height: null,
          width: null,
          top: null,
          left: null
        },
      };
    }
  }
}
