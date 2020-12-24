const getArea = (polygon, ...args) => {
  switch (polygon) {
    case 'circle':
      getCircle(...args);
      break;
    case 'rect':
      getRect(...args);
      break;
    case 'trapezoid':
      getTrapezoid(...args);
      break;
    case 'cylinder':
      getCylinder(...args);
      break;
    default:
      break;
  }
};

const getCircle = (() => {
  let sum = 0;
  return (radius, count) => {
    if (!checkParameter(radius)) {
      return;
    }
    if (count < 1) {
      return;
    }

    sum += radius ** 2 * Math.PI;
    getCircle(radius + 1, count - 1);
    return sum;
  };
})();

const getRect = (left, top) => {
  if (!checkParameter(left, top)) {
    return false;
  }

  return left * top;
};

const getTrapezoid = (top, bottom, height) => {
  if (!checkParameter(top, bottom, height)) {
    return;
  }

  return ((top + bottom) * height) / 2;
};

const getCylinder = (radius, height) => {
  if (!checkParameter(radius, height)) {
    return;
  }

  return 2 * Math.PI * radius ** 2 + 2 * Math.PI * radius * height;
};

const checkParameter = (...args) => {
  const argValue = args.every((arg) => arg);
  const allArgsTypeNumber = args.every((arg) => typeof arg === 'number');
  if (!argValue) {
    return alert('인자의 개수가 부족합니다.');
  }

  if (!allArgsTypeNumber) {
    return alert('숫자를 입력해주세요.');
  }

  return true;
};

console.log(getCircle(3, 3));
