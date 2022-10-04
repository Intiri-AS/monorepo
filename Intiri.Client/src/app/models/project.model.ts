export class Project {
  id: number;
  name: string;
  budget: string;
  room: any;
  roomDetails: any;
  styleImages: Array<any>;
  colorPalettes: Array<any>;
  projectMoodboards: Array<any>;

  constructor(
    id?: number, 
    name?: string,
    budget?: string,
    room?: any,
    roomDetails?: any,
    styleImages?: Array<any>,
    colorPalettes?: Array<any>,
    projectMoodboards?: Array<any>) 
  {
    this.id = id;
    this.name = name;
    this.budget = budget;
    this.room = room;
    this.roomDetails = roomDetails;
    this.styleImages = styleImages;
    this.colorPalettes = colorPalettes;
    this.projectMoodboards = projectMoodboards;
  }
}
