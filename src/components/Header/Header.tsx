"use client";

import * as React from "react";
import styled from "styled-components";
import SuperHeader from "../SuperHeader";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import { MEDIA_QUERIES } from "@/constants";
import { Icon, Menu, Search, ShoppingBag } from "react-feather";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

function ActionIcon(Icon: Icon, label: string) {
  return (
    <UnstyledButton>
      <Icon strokeWidth={2} size={24} style={{ color: "var(--gray-900)" }} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </UnstyledButton>
  );
}

function Header() {
  return (
    <Wrapper>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>

        <PhoneActions>
          {ActionIcon(ShoppingBag, "Open cart")}
          {ActionIcon(Search, "Search")}
          {ActionIcon(Menu, "Menu")}
        </PhoneActions>
        <Filler/>
      </MainHeader>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid var(--gray-300);
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${MEDIA_QUERIES.tabletAndBelow} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${MEDIA_QUERIES.tabletAndBelow} {
    display: none;
  }
`

const PhoneActions = styled.div`
  gap: clamp(16px, 5vw - 14px, 32px);
  display: var(--actions-display);
`;

const DesktopNav = styled.nav`
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
