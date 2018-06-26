import React from "react";
import { shallow } from "enzyme";

import "./testSetup";
import NewBeerForm from "./NewBeerForm";

describe("<NewBeerForm/>", () => {
  describe(".render()", () => {
    it("renders a new form", () => {
      const wrapper = shallow(<NewBeerForm />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(".handleUpdate(event)", () => {
    it("updates the state based on the name input value", () => {
      const wrapper = shallow(<NewBeerForm />);
      expect(wrapper.state()).toEqual({ name: "", abv: "", style: "" });
      wrapper
        .find("#name")
        .simulate("change", { target: { name: "name", value: "Bud" } });
      wrapper
        .find("#style")
        .simulate("change", { target: { name: "style", value: "Lager" } });
      wrapper
        .find("#abv")
        .simulate("change", { target: { name: "abv", value: "4.5" } });
      expect(wrapper.state()).toEqual({
        name: "Bud",
        abv: "4.5",
        style: "Lager"
      });
    });
  });

  describe(".onSubmit(data)", () => {
    const onSubmitMock = jest.fn();
    const wrapper = shallow(<NewBeerForm onSubmit={onSubmitMock} />);
    const state = { name: "Bud", style: "Lager", abv: "4.0" };
    const eventMock = { preventDefault: jest.fn() };

    beforeAll(() => {
      wrapper.setState(state);
      wrapper.find("form").simulate("submit", eventMock);
    });

    it("prevents the default action from occuring", () => {
      expect(onSubmitMock).toHaveBeenCalledWith(state);
    });

    it("on form submit it returns the data to the onSubmit() callback", () => {
      expect(eventMock.preventDefault).toHaveBeenCalled();
    });
  });
});
