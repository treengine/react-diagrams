import { Point } from './Point';
import { Matrix } from './Matrix';

export class AbstractPolygon {
  protected points: Point[];

  constructor(points: Point[] = []) {
    this.points = points;
  }

  serialize() {
    return this.points.map((point) => {
      return [point.x, point.y];
    });
  }

  deserialize(data: any) {
    this.points = data.map((point) => {
      return new Point(point[0], point[1]);
    });
  }

  scale(x, y, origin: Point) {
    let matrix = Point.createScaleMatrix(x, y, origin);
    this.points.forEach((point) => {
      point.transform(matrix);
    });
  }

  transform(matrix: Matrix) {
    this.points.forEach((point) => {
      point.transform(matrix);
    });
  }

  setPoints(points: Point[]) {
    this.points = points;
  }

  getPoints(): Point[] {
    return this.points;
  }

  translate(offsetX: number, offsetY: number) {
    this.points.forEach((point) => {
      point.translate(offsetX, offsetY);
    });
  }

  doClone(ob: this) {
    this.points = ob.points.map((point) => {
      return point.clone();
    });
  }

  clone(): this {
    let ob = Object.create(this);
    ob.doClone(this);
    return ob;
  }
}