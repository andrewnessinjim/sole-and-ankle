import Select from "./Select";

export default {
  component: Select,
  title: "Select",
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = {
  args: {
    label: "Sort",
    value: "newest",
    children: [
      <option value="newest" key={1}>
        Newest Releases
      </option>,
      <option value="price" key={2}>
        Price
      </option>,
      <option value="curated" key={3}>
        Curated
      </option>,
    ],
  },
};
