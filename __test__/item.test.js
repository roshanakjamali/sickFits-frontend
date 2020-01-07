import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import ItemComponent from "../components/Item";

const fakeItem = {
  id: "ABC123",
  title: "A cool Item",
  price: 5000,
  description: "This item is really cool",
  image: "dog.jpg",
  largeImage: "largeDog.jpg"
};

describe("<Item/>", () => {
  // it("render PriceTag", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //   // console.log(wrapper.debug());
  //   const priceTag = wrapper.find("PriceTag");
  //   // console.log(priceTag.children().text());
  //   expect(priceTag.children().text()).toBe("$50");
  // });

  // it("render Title", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);

  //   const titleLink = wrapper.find("Title a");
  //   expect(titleLink.children().text()).toBe(fakeItem.title);
  // });

  // it("render Image", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);

  //   const image = wrapper.find("img");
  //   expect(image.props().src).toBe(fakeItem.image);
  //   expect(image.props().alt).toBe(fakeItem.title);
  // });

  // it("render Button", () => {
  //   const wrapper = shallow(<ItemComponent item={fakeItem} />);

  //   const buttonList = wrapper.find(".buttonList");
  //   expect(buttonList.children()).toHaveLength(3);
  //   expect(buttonList.children().find("Link")).toHaveLength(1);
  //   expect(
  //     buttonList
  //       .children()
  //       .find("AddToCart")
  //       .exists()
  //   ).toBe(true);
  //   expect(buttonList.children().find("DeleteItem")).toBeTruthy();
  // });

  it("renders and matches the snapshot", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
