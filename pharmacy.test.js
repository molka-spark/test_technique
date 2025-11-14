import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease Dafalgan benefits twice as fast as normal drugs", () => {
    const drug = new Drug("Dafalgan", 10, 40);
    const pharmacy = new Pharmacy([drug]);
    pharmacy.updateBenefitValue();
    expect(pharmacy.drugs[0].benefit).toBe(38);
    expect(pharmacy.drugs[0].expiresIn).toBe(9);
  });
});
