const createCircle = (radius) => {
  if (checkParameter(radius)) {
    return;
  }

  return radius ** 2 * Math.PI;
};

const createSquare = (left, top) => {
  if (checkParameter(left, top)) {
    return;
  }

  return left * top;
};

const createTrapezoid = (top, bottom, height) => {
  if (checkParameter(top, bottom, height)) {
    return;
  }

  return ((top + bottom) * height) / 2;
};

const createCylinder = (radius, height) => {
  if (checkParameter(radius, height)) {
    return;
  }

  return 2 * Math.PI * radius ** 2 + 2 * Math.PI * radius * height;
};

const checkParameter = (...args) => {
  const argValue = args.every((arg) => arg);
  const allArgsTypeNumber = args.every((arg) => typeof arg === 'number');
  if (!argValue) {
    return error('인자의 개수가 부족합니다.');
  }

  if (!allArgsTypeNumber) {
    return error('숫자를 입력해주세요.');
  }
};
