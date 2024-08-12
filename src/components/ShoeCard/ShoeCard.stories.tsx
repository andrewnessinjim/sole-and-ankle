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

const TestShoeCardContainer = styled.div`
  width: 340px;
`