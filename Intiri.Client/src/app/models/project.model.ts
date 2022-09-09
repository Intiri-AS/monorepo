export class Project {
  name: string;
  styleImages: Array<object>;
  room: object;
  color: object;
  moodboard: object;

  //TODO This is example for User model

  constructor(name: string, styleImages:  Array<object>, room: object, color: object, moodboard: object) {
    this.name = name;
    this.styleImages = styleImages;
    this.room = room;
    this.color = color;
    this.moodboard = moodboard;
  }
}
