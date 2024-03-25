import { Vector3D } from './vector.js';

export const areNumbers = (...variables) => {
   return variables.every(variable => typeof variable === 'number');
};
export const areNotSpecified = (...variables) => {
   return variables.every(
      variable => typeof variable === 'undefined' || variable === null
   );
};
export const areVectors = (...variables) => {
   return variables.every(variable => variable instanceof Vector3D);
};
