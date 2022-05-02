// Subclass object should be substitutable for the superclass object from which it is derived

export class Rectangle {
    public width: number;
    public height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    public calculateArea(): number {
      return this.width * this.height;
    }
}
  
export class Square extends Rectangle {
    public _width: number;
    public _height: number;
  
    constructor(width: number, height: number) {
      super(width, height);
  
      this._width = width;
      this._height = height;
    }
}