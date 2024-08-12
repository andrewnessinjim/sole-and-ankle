import ShoeCard from "./ShoeCard";
import SHOES from "@/data";

export default {
  component: ShoeCard,
  title: "Shoe Card",
  tags: ["autodocs"]
};

export const Default = {
  args: {
    ...SHOES[0]
  },
};
