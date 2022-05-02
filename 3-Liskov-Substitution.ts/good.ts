// Subclass object should be substitutable for the superclass object from which it is derived

export class Rectangulo {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    public calculateArea(): number {
      return this.width * this.height;
    }

    public isSquare(): boolean {
      return this.width === this.height;
    }
}