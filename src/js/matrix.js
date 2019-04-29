export const posFunc = (p, w, h) => {
  const halfWidth = w / 2;
  const halfHeight = h / 2;
  const x = p.x - halfWidth;
  const y = halfHeight - p.y;
  return [x / halfWidth, y / halfHeight];
};

export const invPosFunc = (p, w, h) => {
  const halfWidth = w / 2;
  const halfHeight = h / 2;
  const x = p.x * halfWidth;
  const y = p.y * halfHeight;
  return [x + halfWidth, halfHeight - y];
};
