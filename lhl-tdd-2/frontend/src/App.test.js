import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./testSetup";
import { shallow } from "enzyme";

import { fetchBeers } from "./Api";
import { beerData } from "./__mocks__/Api";

jest.mock("./Api");

describe("<App/>", () => {
  describe(".render()", () => {
    it("renders the component correctly based of off the default state", () => {
      const wrapper = shallow(<App />);
      expect(wrapper).toMatchSnapshot();
    });

    it("renders the beer table when beers exist on the state", () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ beers: beerData });
      expect(wrapper).toMatchSnapshot();
    });

    it("renders the <NewBeerForm/> if showForm === true", () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ showForm: true });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(".componentDidMount()", () => {
    it("calls fetchBeers()", async () => {
      const wrapper = shallow(<App />);
      expect(fetchBeers).toHaveBeenCalled();
    });
  });
});
