export class Project {
  name: string;
  styleImages: Array<any>;
  room: object;
  colorPalettes: Array<any>;
  budget: string;
  roomDetails: object;
  projectMoodboards: Array<any>;

  constructor() {
    this.name = '';
    this.styleImages = [];
    this.room = {};
    this.budget = '';
    this.roomDetails = {};
    this.colorPalettes = [];
    this.projectMoodboards = [];
  }
}
