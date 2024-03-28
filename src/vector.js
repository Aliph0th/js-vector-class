export class Vector3D {
   #coords = [];
   constructor(x, y, z) {
      this.coords = [x, y, z];
   }

   static fromTwoPoints(point1, point2) {
      if (
         !Array.isArray(point1) ||
         !Array.isArray(point2) ||
         [...point1, ...point2].some(x => typeof x !== 'number')
      ) {
         throw new Error('Points must be arrays of numbers');
      }
      const coords = point2.map((c, index) => c - point1[index]);
      return new Vector3D(...coords);
   }

   get coords() {
      return [...this.#coords];
   }
   set coords(coords) {
      if (!Array.isArray(coords)) {
         throw new Error('Assigned value must be an array');
      }
      const [x, y, z] = coords;
      if (this.#areNumbers(x) && !this.#someSpecified(y, z)) {
         this.#coords = [x, x, x];
      } else if (this.#areNumbers(x, y, z)) {
         this.#coords = [x, y, z];
      } else {
         throw new Error('Coordinates are incorrect');
      }
   }

   get length() {
      return Math.sqrt(this.#coords.reduce((accum, c) => accum + c * c, 0));
   }
   set length(_) {
      throw new Error('Cannot assign length property');
   }

   #areNumbers = (...variables) => {
      return variables.every(variable => typeof variable === 'number');
   };
   #someSpecified = (...variables) => {
      return variables.some(
         variable => typeof variable !== 'undefined' && variable !== null
      );
   };
   #isVector = variable => {
      return variable instanceof Vector3D;
   };

   toString = () => {
      return `vector(${this.#coords.join(', ')})`;
   };

   copy = () => {
      return new Vector3D(...this.#coords);
   };

   add = vector => {
      if (!this.#isVector(vector)) {
         throw new Error('Argument must be a Vector3D instance');
      }
      this.#coords = this.#coords.map((c, index) => c + vector.coords[index]);
      return this;
   };
   subtract = vector => {
      if (!this.#isVector(vector)) {
         throw new Error('Argument must be a Vector3D instance');
      }
      this.#coords = this.#coords.map((c, index) => c - vector.coords[index]);
      return this;
   };

   times = alpha => {
      if (!this.#areNumbers(alpha)) {
         throw new Error('Argument must be a number');
      }
      this.#coords = this.#coords.map(c => c * alpha);
      return this;
   };

   isEqual = vector => {
      if (!this.#isVector(vector)) {
         throw new Error('Argument must be a Vector3D instance');
      }
      return this.#coords.every((coord, index) => coord === vector.coords[index]);
   };

   normalize = () => {
      this.#coords = this.#coords.map(c => c / this.length);
      return this;
   };

   scalarMultiplyBy = vector => {
      if (!this.#isVector(vector)) {
         throw new Error('Argument must be a Vector3D instance');
      }
      return this.#coords.reduce((accum, c, index) => accum + c * vector.coords[index]);
   };

   setComponents = ({ x, y, z }) => {
      if (this.#areNumbers(x)) {
         this.#coords[0] = x;
      }
      if (this.#areNumbers(y)) {
         this.#coords[1] = y;
      }
      if (this.#areNumbers(z)) {
         this.#coords[2] = z;
      }
      return this;
   };

   set = vector => {
      if (!this.#isVector(vector)) {
         throw new Error('Argument must be a Vector3D instance');
      }
      this.#coords = [...vector.coords];
      return this;
   };
}
