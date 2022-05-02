// Many client-specific interfaces are better than one general-purpose interface

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