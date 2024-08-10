import type { Preview } from "@storybook/react";
import React from "react";
import { Raleway } from "next/font/google";

import GlobalStyles from "../src/components/GlobalStyles";
const raleway = Raleway({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (<div className={raleway.className}><GlobalStyles/><Story/></div>)
  ]
};

export default preview;
