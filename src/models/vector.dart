library vector;

import "dart:math";

class Vector {
	int x, y;

	Vector(this.x, this.y);

	Vector.clone(Vector v) {
		x = v.x;
		y = v.y;
	}

	operator ==(Vector v) => x == v.x && y == v.y;

	operator +(Vector v) => move(x + v.x, y + v.y);

	operator -(Vector v) => move(x - v.x, y - v.y);

	operator *(num n) => move(x * n, y * n);

	get length => sqrt(pow(x, 2) + pow(y, 2));

	move(num x, num y) {
		this.x = x;
		this.y = y;
	}

	normalize() {
		x /= length;
		y /= length;
	}

}
