type ShapeX = { x: {x: Function | undefined } | undefined, y: number} | undefined

const x = undefined as unknown as ShapeX;
x.x.x();