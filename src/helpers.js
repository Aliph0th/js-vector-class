export const areNumbers = (...variables) => {
   return variables.every(variable => typeof variable === 'number');
};
export const areNotSpecified = (...variables) => {
   return variables.every(
      variable => typeof variable === 'undefined' || variable === null
   );
};
