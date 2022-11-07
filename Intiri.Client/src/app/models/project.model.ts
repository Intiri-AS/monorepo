import { Moodboard } from './moodboard.model';

export class Project {
  id: number;
  name: string;
  styleImages: Array<any>;
  room: object;
  colorPalettes: Array<any>;
  // budget: string;
  created: any;
  roomDetails: any;
  projectMoodboards: Array<any>;
  currentMoodboard: Moodboard;

  constructor() {
    this.id = null;
    this.name = '';
    this.styleImages = [];
    this.room = {};
    // this.budget = '';
    this.roomDetails = {};
    this.colorPalettes = [];
    this.projectMoodboards = [];
    this.currentMoodboard = new Moodboard();
  }
}
