"use client";

import * as React from "react";
import styled from "styled-components";
import SuperHeader from "../SuperHeader";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";

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
        <Side/>
      </MainHeader>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid var(--gray-300);
`;

const Side = styled.div`
  flex: 1;
`

const MainHeader = styled.div`
  ${MaxWidthWrapper};
  height: 72px;
  display: flex;
  align-items: baseline;
  padding-top: 18px;
  padding-bottom: 18px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0 48px;
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
