type ShapeY = { y: {y: Function | undefined } | undefined, z: number} | undefined

const y = undefined as unknown as ShapeY;
y.y.y()
