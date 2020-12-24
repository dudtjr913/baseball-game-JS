const createCircle = (radius) => {
  return radius ** 2 * Math.PI;
};

const createSquare = (left, top) => {
  return left * top;
};

const createTrapezoid = (top, bottom, height) => {
  return ((top + bottom) * height) / 2;
};

const createCylinder = (radius, height) => {
  return 2 * Math.PI * radius ** 2 + 2 * Math.PI * radius * height;
};
