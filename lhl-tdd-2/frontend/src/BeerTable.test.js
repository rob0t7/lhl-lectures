import React from "react";
import "./TestSetup";
import { shallow } from "enzyme";

import BeerTable from "./BeerTable";

describe("<BeerTable/>", () => {
  describe(".render()", () => {
    it("renders the proper beer table based on the props", () => {
      const props = {
        beers: [
          {
            id: 1,
            name: "Lone Pine",
            style: "American IPA"
          },
          {
            id: 2,
            name: "Lug Tread",
            style: "Kolsch"
          }
        ]
      };
      const wrapper = shallow(<BeerTable {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
