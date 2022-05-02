// Every module, class or function in a computer program should have one responsibility

export class Book {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;
}
  
 export class Persistence {
    public saveToFile(book: Book): void {
        console.log(`Saving book ${book.title} to file`);
    }
}