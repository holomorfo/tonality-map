import { sum } from "./logs";

describe("My math library", () => {
  it("should be able to add things correctly", () => {
    expect(sum(3, 4)).toEqual(7);
  });
});
