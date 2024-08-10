"use client";

import * as React from "react";
import styled from "styled-components";
import ShoeSidebar from "../ShoeSidebar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import BreadCrumbs from "../BreadCrumbs";
import Spacer from "../Spacer";
import ShoeGrid from "../ShoeGrid";
import Select from "../Select";

function ShoeIndex() {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select label="Sort" value="price">
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={42} />
        <ShoeGrid />
      </MainColumn>
      <SideColumn>
        <BreadCrumbs>
          <BreadCrumbs.Crumb href="/home">Home</BreadCrumbs.Crumb>
          <BreadCrumbs.Crumb href="/sale">Sale</BreadCrumbs.Crumb>
          <BreadCrumbs.Crumb href="/sale/shoes">Shoes</BreadCrumbs.Crumb>
        </BreadCrumbs>
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
`;

const SideColumn = styled.div`
  order: 1;
  width: 248px;
`;

const MainColumn = styled.div`
  order: 2;
  flex-grow: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: ${25 / 16}rem;
`;
export default ShoeIndex;
