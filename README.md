# Vector class in Javascript

This vector class implements vectors and operations on them in three-dimensional space. Basic algebraic operations on vectors, vector copying and the chaining mechanism are supported

## Constructor

-  `new Vector3D(x, y, z)` - creates new vector with `(x, y, z)` coordinates
-  `new Vector3D(x)` - creates new vector with `(x, x, x)` coordinates

## Methods

-  `static fromTwoPoints(point1, point2): Vector3D` - creates new Vector3D instance from two points. `point1` and `point2` are arrays of numbers
-  `copy(): Vector3D` - returns new Vector3D with the same coordinates
-  `add(vector: Vector3D): Vector3D` or `subtract(vector: Vector3D): Vector3D` - adds / subtracts a vector from original
-  `times(alpha: number): Vector3D` - returns vector multiplied by scalar `alpha`
-  `isEqual(vector: Vector3D): boolean` - checks if `vector` equals original vector
-  `normalize(): Vector3D` - normalizes original vector
-  `scalarMultiplyBy(vector: Vector3D): number` - dot product of vectors

## Properties

-  `coords` - stores the coordinates of vector (readwrite).
-  `length` - stores length of vector (readonly)
