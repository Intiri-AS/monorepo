export class Project {
  name: string;
  styleImages: Array<object>;
  room: object;
  color: object;
  moodboard: object;

  //TODO This is example for User model

  constructor() {
    this.name = '';
    this.styleImages = [];
    this.room = {};
    this.color = {};
    this.moodboard = {};
  }
}
