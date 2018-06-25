// 数组扁平化
export const flatten = value => {
  let arr = value;
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};
