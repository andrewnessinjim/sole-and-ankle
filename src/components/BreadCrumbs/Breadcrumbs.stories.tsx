import Breadcrumbs from "./Breadcrumbs";

export default {
  component: Breadcrumbs,
  title: "Breadcrumbs",
  tags: ["autodocs"],
};

export const Default = {
    args: {
        children: [
            <Breadcrumbs.Crumb href="/home" key={1}>Home</Breadcrumbs.Crumb>,
            <Breadcrumbs.Crumb href="/home/sale" key={2}>Sale</Breadcrumbs.Crumb>,
            <Breadcrumbs.Crumb href="/home/sale/shoes" key={3}>Shoes</Breadcrumbs.Crumb>,
        ]
    }
}

export const JustHome = {
    args: {
        children: [
            <Breadcrumbs.Crumb href="/home" key={1}>Home</Breadcrumbs.Crumb>,
        ]
    }
}