function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    // simulate an API
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe("mocking learning", () => {
  it("mocks a reg function", () => {
    const fetchDogs = jest.fn();
    // fn have been called
    fetchDogs();
    // expect(fetchDogs).toHaveBeenCalled();

    // fn have been called with params
    fetchDogs("snickers");
    // expect(fetchDogs).toHaveBeenCalledWith("snickers");

    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it("can create a person", () => {
    const me = new Person("Roshanak", ["kalapch", "pizza"]);
    expect(me.name).toBe("Roshanak");
  });

  it("can fetch foods", async () => {
    const me = new Person("Roshanak", ["kalapch", "pizza"]);
    // mock the favFoods function
    me.fetchFavFoods = jest
      .fn()
      .mockResolvedValue(["sushi", "kalapch", "pizza"]);
    const favFoods = await me.fetchFavFoods();
    // console.log(favFoods);
    expect(favFoods).toContain("kalapch");
  });
});
