//
// this example has a bug you need to understand and FIX!
//

function Point(x, y) {
   var obj = {};

   obj.getx = function() { return x};
   obj.gety = function() { return y};

   obj.move = function(dx, dy) { x += dx; y += dy; };

   obj.toString = function() {       
   		return "[Point with x=" + x + " and y=" + y + "]";
   };

   return obj;
}

function ColoredPoint(x, y, color) {
	var obj = Point(x, y);
	obj.darken = function(tint) { color += tint; };   
	obj.toString = function() {
		return "[ColoredPoint with x=" + obj.getx() + ", y=" + obj.gety() +
		         ", and color=" + color + "]" ;
	};
	return obj;
}

p = Point(3, 4);
p.move(1, 2);

p.move(1, 2);
console.log(p.toString());

cp = ColoredPoint (2, 2, 44);
console.log(cp.toString());
cp.move (10, 10);
console.log(cp.toString());
