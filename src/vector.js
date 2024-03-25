import { areNotSpecified, areNumbers, areVectors } from './helpers.js';

export class Vector3D {
   #coords;
   constructor(x, y, z) {
      this.coords = [x, y, z];
   }

   static fromTwoPoints(point1, point2) {
      if (
         !Array.isArray(point1) ||
         !Array.isArray(point2) ||
         !areNumbers(...point1, ...point2)
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
      if (areNumbers(x) && areNotSpecified(y, z)) {
         this.#coords = [x, x, x];
      } else if (areNumbers(x, y, z)) {
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

   copy = () => {
      return new Vector3D(...this.#coords);
   };

   add = vector => {
      if (!areVectors(vector)) {
         throw new Error('Argument must be a Vector3D instance');
      }
      this.#coords = this.#coords.map((c, index) => c + vector.coords[index]);
      return this;
   };
   subtract = vector => {
      if (!areVectors(vector)) {
         throw new Error('Argument must be a Vector3D instance');
      }
      this.#coords = this.#coords.map((c, index) => c - vector.coords[index]);
      return this;
   };

   times = alpha => {
      if (!areNumbers(alpha)) {
         throw new Error('Argument must be a number');
      }
      this.#coords = this.#coords.map(c => c * alpha);
      return this;
   };

   isEqual = vector => {
      if (!areVectors(vector)) {
         throw new Error('Argument must be a Vector3D instance');
      }
      return this.#coords.every((coord, index) => coord === vector.coords[index]);
   };

   normalize = () => {
      this.#coords = this.#coords.map(c => c / this.length);
      return this;
   };

   scalarMultiplyBy = vector => {
      if (!areVectors(vector)) {
         throw new Error('Argument must be a Vector3D instance');
      }
      return this.#coords.reduce((accum, c, index) => accum + c * vector.coords[index]);
   };
}
