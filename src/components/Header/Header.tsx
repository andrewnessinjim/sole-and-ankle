"use client";

import * as React from "react";
import styled from "styled-components";
import SuperHeader from "../SuperHeader";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import { MEDIA_QUERIES } from "@/constants";
import { Icon, Menu, Search, ShoppingBag } from "react-feather";

function ActionIcon(Icon: Icon) {
  return (
    <Icon strokeWidth={2} size={24} style={{ color: "var(--gray-900)" }} />
  );
}

function Header() {
  return (
    <Wrapper>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Side>
          <Actions>
            {ActionIcon(ShoppingBag)}
            {ActionIcon(Search)}
            {ActionIcon(Menu)}
          </Actions>
        </Side>
      </MainHeader>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid var(--gray-300);
`;

const Side = styled.div`
  flex: 1;

  @media ${MEDIA_QUERIES.tabletAndBelow} {
    flex: revert;
  }
`;

const Actions = styled.div`
  gap: clamp(16px, 5vw - 14px , 32px);
  display: var(--actions-display);
`;

const Nav = styled.nav`
  gap: 48px;
  margin: 0 48px;
  display: var(--nav-display);
`;

const MainHeader = styled.div`
  ${MaxWidthWrapper};
  height: 72px;
  display: flex;
  align-items: baseline;
  padding-top: 18px;
  padding-bottom: 18px;
  --actions-display: none;
  --nav-display: flex;

  @media ${MEDIA_QUERIES.tabletAndBelow} {
    justify-content: space-between;
    align-items: center;
    --actions-display: flex;
    --nav-display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
