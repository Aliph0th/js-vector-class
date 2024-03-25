import { Vector3D } from './vector.js';

const a = new Vector3D(1, 2, 3);
const b = new Vector3D(-3);
const c = new Vector3D(3, 4, 0);
const d = new Vector3D(2, 4, 6);
const e = Vector3D.fromTwoPoints([3, 1, 2], [6, 2, 2]);

console.log(a.add(b).coords); // [-2, -1, 0]
console.log(a.subtract(b).coords); // [1, 2, 3]

console.log(c.length); // 5
console.log(c.copy().normalize().coords, c.coords); // [0.6, 0.8, 0] but c has not changed: [3, 4, 0]

console.log(d.times(0.5).isEqual(a)); // true
console.log(b.isEqual(a)); // false

console.log(a.scalarMultiplyBy(d)); // 14

console.log(e.coords); // [3, 1, 0]
e.coords = [6, 723, 1];
console.log(e.coords); // [6, 723, 1]

// Errors
/*
new Vector3D();
new Vector3D(2, 4);
new Vector3D('3', '2', '1');
a.add(5);
a.times([4]);
a.length = 2;
a.coords = [3, 54];
*/
