"use client";

import * as React from "react";
import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Search, ShoppingBag } from "react-feather";
import IconInput from "../IconInput";
import { MEDIA_QUERIES } from "@/constants";

const ContentWrapper = styled.div`
  ${MaxWidthWrapper}
  height: 40px;
  display: var(--content-display);
  align-items: center;
  gap: 24px;
`;

const Wrapper = styled.div`
  background: var(--gray-900);
  color: var(--white);
  font-weight: 500;
  font-size: 14px;
  --content-display: flex;

  @media ${MEDIA_QUERIES.tabletAndBelow} {
    height: 4px;
    --content-display: none;
  }
`;

const MarketingMessage = styled.p`
  margin: 0;
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: var(--gray-300);
`;

function SuperHeader() {
  return (
    <Wrapper>
      <ContentWrapper>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <IconInput
          label="Search"
          placeholder="Search..."
          size="small"
          DisplayIcon={Search}
          width={175}
        />
        <HelpLink>Help</HelpLink>
        <ShoppingBag
          strokeWidth={1}
          size={24}
          style={{ color: "var(--gray-300)" }}
        />
      </ContentWrapper>
    </Wrapper>
  );
}

export default SuperHeader;
