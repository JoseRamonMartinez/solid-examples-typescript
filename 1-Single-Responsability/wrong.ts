// Every module, class or function in a computer program should have one responsibility

export class Book {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;

  public saveToFile(): void {
    console.log(`Saving book ${this.title} to file`);
  }
}
