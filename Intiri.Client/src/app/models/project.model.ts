export class Project {
  name: string;
  styleImages: Array<object>;
  room: object;
  colorPallete: object;
  budget: string;
  roomDetails: object;
  moodboard: object;

  //TODO This is example for User model

  constructor() {
    this.name = '';
    this.styleImages = [];
    this.room = {};
    this.budget = '';
    this.roomDetails = {};
    this.colorPallete = {};
    this.moodboard = {};
  }
}
