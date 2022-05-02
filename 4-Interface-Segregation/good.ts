// Client should not be exposed to methods it doesn't need.

export interface Character {
    shoot(): void;
    swim(): void;
    talk(): void;
    dance(): void;
}

interface Talker {
    talk(): void;
}
  
interface Shooter {
    shoot(): void;
}
  
interface Swimmer {
    swim(): void;
}
  
interface Dancer {
    dance(): void;
}
  
export class Troll implements Shooter, Dancer {
    public shoot(): string {
      return('Shoot!');
    }
  
    public dance(): string {
      return('Dance!');
    }
}