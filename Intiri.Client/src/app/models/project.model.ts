export class Project {
  id: number;
  name: string;
  styleImages: Array<any>;
  room: any;
  colorPalettes: Array<any>;
  budget: string;
  roomDetails: any;
  projectMoodboards: Array<any>;

  //TODO This is example for User model

  constructor() {
    this.id = 0;
    this.name = '';
    this.styleImages = [];
    this.room = {};
    this.budget = '';
    this.roomDetails = {};
    this.colorPalettes = [];
    this.projectMoodboards = [];
  }
}
