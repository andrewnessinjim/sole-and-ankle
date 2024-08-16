"use client";

import * as React from "react";
import styled from "styled-components";
import ShoeSidebar from "../ShoeSidebar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import BreadCrumbs from "../BreadCrumbs";
import Spacer from "../Spacer";
import ShoeGrid from "../ShoeGrid";
import Select from "../Select";
import { MEDIA_QUERIES } from "@/constants";

function ShoeIndex() {
  const ShoeIndexBreadcrumbs = (
    <BreadCrumbs>
      <BreadCrumbs.Crumb href="/home">Home</BreadCrumbs.Crumb>
      <BreadCrumbs.Crumb href="/sale">Sale</BreadCrumbs.Crumb>
      <BreadCrumbs.Crumb href="/sale/shoes">Shoes</BreadCrumbs.Crumb>
    </BreadCrumbs>
  );

  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TitleWrapper>
            <TitleBreadcrumbsWrapper>
              {ShoeIndexBreadcrumbs}
            </TitleBreadcrumbsWrapper>
            <TitleText>Running</TitleText>
          </TitleWrapper>
          <SortFilterWrapper>
            <Select label="Sort" value="price">
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortFilterWrapper>
        </Header>
        <Spacer size={42} />
        <ShoeGrid />
      </MainColumn>
      <SideColumn>
        {ShoeIndexBreadcrumbs}
        <Spacer size={42} />
        <ShoeSidebar />
      </SideColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${MaxWidthWrapper};
  display: flex;
  gap: 32px;
  align-items: baseline;
  --title-breadcrumbs-display: none;

  @media ${MEDIA_QUERIES.tabletAndBelow} {
    --side-column-display: none;
    --title-breadcrumbs-display: block;
    --header-align-items: flex-end;
  }
`;

const SideColumn = styled.div`
  order: 1;
  flex-basis: 248px;
  flex-shrink: 0;
  display: var(--side-column-display, block);
`;

const MainColumn = styled.div`
  order: 2;
  flex-grow: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: var(--header-align-items, baseline);
`;

const TitleWrapper = styled.div``;

const TitleBreadcrumbsWrapper = styled.div`
  display: var(--title-breadcrumbs-display);
`;

const TitleText = styled.h2`
  font-weight: 600;
  font-size: ${25 / 16}rem;
`;

const SortFilterWrapper = styled.div`
   @media ${MEDIA_QUERIES.phoneAndBelow} {
    display: none;
   }
`;

export default ShoeIndex;
