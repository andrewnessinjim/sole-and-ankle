import styled from "styled-components";
import ShoeCard from "./ShoeCard";
import SHOES from "@/data";

export default {
  component: ShoeCard,
  title: "Shoe Card",
  tags: ["autodocs"],
  decorators: [
    (Story) => <TestShoeCardContainer><Story/></TestShoeCardContainer>
  ]
};

export const Default = {
  args: {
    ...SHOES[0]
  },
};

export const OnSale = {
  args: {
    ...SHOES[5]
  },
};

const TestShoeCardContainer = styled.div`
  width: 340px;
`