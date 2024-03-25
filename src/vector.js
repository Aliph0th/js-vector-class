import { areNotSpecified, areNumbers } from './helpers.js';

export class Vector3D {
   #coords;
   constructor(x, y, z) {
      this.coords = [x, y, z];
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
}
