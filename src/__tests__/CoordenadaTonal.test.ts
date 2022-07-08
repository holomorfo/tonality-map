import CoordenadaTonal from "../CoordenadaTonal";

// here the whole foo var is mocked deeply

test("should create an empty harony", () => {
  // Arrange
  let coord = new CoordenadaTonal();
  // Act

  // Assert
  expect(coord.escala).toBe(0);
  expect(coord.tipo).toBe("");
  expect(coord.grado).toBe(0);
});

test("should set region", () => {
  // Arrange
  let coord = new CoordenadaTonal();

  // Act
  coord.setReg(1, "M", 5);

  // Assert
  expect(coord.escala).toBe(1);
  expect(coord.tipo).toBe("M");
  expect(coord.grado).toBe(5);
});

test("should return string version of coordinate", () => {
  // Arrange
  let coord = new CoordenadaTonal();

  // Act
  coord.setReg(1, "M", 5);
  let str = coord.stringify();

  // Assert
  expect(str).toBe("Escala 1 M grado 5");
});
