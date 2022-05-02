// Depend upon abstractions, [not] concretions.

export interface Developer {
  develop(): void;
}
  
export class FrontendDeveloper implements Developer {
  public develop(): void {
      this.writeHtmlCode();
  }
  
  private writeHtmlCode(): void {
      console.log("Frontend: Writing HTML code...");
  }
}
  
export class BackendDeveloper implements Developer {
  public develop(): void {
    this.writeTypeScriptCode();
  }

  private writeTypeScriptCode(): void {
    console.log("Backend: Writing TypeScript code...");
  }
}
  
export class SoftwareProject {
  public developers: Developer[];
  
  public createProject(): void {
    this.developers.forEach((developer: Developer) => {
      developer.develop();
    });
  }
}