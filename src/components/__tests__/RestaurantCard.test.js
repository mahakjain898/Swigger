import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import RestaurantCardMock from "../mocks/RestaurantCardMock.json";
import { withPromoted } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("Should render Restaurant Card with props data", () => {
  render(<RestaurantCard resData={RestaurantCardMock} />);

  const name = screen.getByText("Go Zero - Guilt Free Ice Creams");
  expect(name).toBeInTheDocument();
});

it("Should render withPromoted Restaurant Card with props data", () => {
  render(<withPromoted resData={RestaurantCardMock} />);

  const name = screen.getByText("Go Zero - Guilt Free Ice Creams");
  expect(name).toBeInTheDocument();
});
