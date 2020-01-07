describe("Sample test 101", () => {
  it("Works as expected", () => {
    const age = 100;
    expect(1).toEqual(1);
    expect(age).toEqual(100);
  });

  it("handle ranges just fine", () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  //   it.only("makes a list of dogs", () => {
  //   it.skip("makes a list of dogs", () => {
  //   xit("makes a list of dogs", () => {
  fit("makes a list of dogs", () => {
    const dogs = ["kamfa", "golden"];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain("kamfa");
  });
});
