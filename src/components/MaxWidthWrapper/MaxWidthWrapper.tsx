"use client";

import { MEDIA_QUERIES } from "@/constants";
import {css} from "styled-components";

const MaxWidthWrapper = css`
  --site-padding: 32px;
  max-width: 1800px;
  padding-left: var(--site-padding);
  padding-right: var(--site-padding);
  margin-left: auto;
  margin-right: auto;

  @media ${MEDIA_QUERIES.phoneAndBelow} {
    --site-padding: 16px;
  }
`;

export default MaxWidthWrapper;