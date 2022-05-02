// Many client-specific interfaces are better than one general-purpose interface

interface Character {
    shoot(): void;
    swim(): void;
    talk(): void;
    dance(): void;
}

export class Troll implements Character {
    public shoot(): string {
      return ('Shoot!')
    }
    
    public swim(): void {
      // a troll can't swim
    }
  
    public talk(): void {
      // a troll can't talk
    }
  
    public dance(): string {
      return ('Dance!')
    }
}