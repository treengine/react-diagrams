import { Point } from './Point';
import { flatMap } from 'lodash';
import { Rectangle } from './Rectangle';
import { BasePolygon } from './BasePolygon';

export class Polygon extends BasePolygon {
	constructor(points: Point[] = []) {
		super(points);
	}

	static boundingBoxFromPolygons(polygons: Polygon[]): Rectangle {
		return Polygon.boundingBoxFromPoints(
			flatMap(polygons, (polygon) => {
				return polygon.getPoints();
			})
		);
	}

	static boundingBoxFromPoints(points: Point[]): Rectangle {
		if (points.length === 0) {
			return new Rectangle(0, 0, 0, 0);
		}

		let minX = points[0].x;
		let maxX = points[0].x;
		let minY = points[0].y;
		let maxY = points[0].y;

		for (let i = 1; i < points.length; i++) {
			if (points[i].x < minX) {
				minX = points[i].x;
			}
			if (points[i].x > maxX) {
				maxX = points[i].x;
			}
			if (points[i].y < minY) {
				minY = points[i].y;
			}
			if (points[i].y > maxY) {
				maxY = points[i].y;
			}
		}

		return new Rectangle(new Point(minX, minY), new Point(maxX, minY), new Point(maxX, maxY), new Point(minX, maxY));
	}
}
