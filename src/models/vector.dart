library vector;

import "dart:math";

class Vector {

	num x, y;
	num _length;

	Vector(num x, num y) : this.x = double.parse(x.toStringAsFixed(3)), this.y = double.parse(y.toStringAsFixed(3));

	Vector.clone(Vector v) : x = v.x, y = v.y;

	Vector.zero() : x = 0, y = 0;

	operator ==(Vector v) => x == v.x && y == v.y;

	operator >(Vector v) => length > v.length;

	operator <(Vector v) => length < v.length;

	operator +(var o) {
		add(num x, [num y]) => new Vector(this.x + x, this.y + (y == null ? x : y));
		if (o is Vector) return add(o.x, o.y); else if (o is num) return add(o);
	}

	operator -(var o) {
		sub(num x, [num y]) => new Vector(this.x - x, this.y - (y == null ? x : y));
		if (o is Vector) return sub(o.x, o.y); else if (o is num) return sub(o);
	}

	operator *(var o) {
		mult(num x, [num y]) => new Vector(this.x * x, this.y * (y == null ? x : y));
		if (o is Vector) return mult(o.x, o.y); else if (o is num) return mult(o);
	}

	operator /(var o) {
		div(num x, [num y]) => new Vector(this.x / x, this.y / (y == null ? x : y));
		if (o is Vector) return div(o.x, o.y); else if (o is num) return div(o);
	}

	get length {
		if (_length == null) _length = sqrt(pow(x, 2) + pow(y, 2));
		return _length;
	}

	get neg => new Vector(-x, -y);

	get hashCode => x + y;

	String toString() => "$x / $y";

	move(num x, num y) {
		this.x = x;
		this.y = y;
	}

	Vector normalize() {
		var l = length != 0 ? length : 1;
		num x = this.x / l, y = this.y / l;
		return new Vector(x, y);
	}

	round() => new Vector(x.round(), y. round());

}
