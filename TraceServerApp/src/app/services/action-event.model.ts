export class ActionEvent {
  actionEventId: number = 0;
  title: string = '';
  description: string = '';
  createdAt: Date = new Date();
  updatedAt: Date | null = null;
  isDeleted: boolean = false;
  imageData?: Blob; 
  //imagePath: string = '';
}
