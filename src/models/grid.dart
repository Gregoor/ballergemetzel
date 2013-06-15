library grid;

class Grid {
	int w, h;

	List data;

	List cols;

	Grid(aW, aH) : w = aW.toInt(), h = aH.toInt() {
		data = new List(w * h);
		cols = new List(w);
		for (int x = 0; x < w; x++) {
			cols[x] = new GridCol(data, x, w);
		}
	}

	GridCol operator [](int x) {
		return cols[x];
	}

	String toString() {
		var s = "";

		for (var i = 0; i < data.length; i+= h) {
			s += data.getRange(i, i + w).toList().toString() + "\n";
		}
		return s;
	}
}

class GridCol {
	int x, w;

	List data;

	GridCol(this.data, this.x, this.w);

	Object operator [](int y) {
		return data[x + y * w];
	}

	void operator []= (int y, var value) {
		data[x + y * w] = value;
	}
}