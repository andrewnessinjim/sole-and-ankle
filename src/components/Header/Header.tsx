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
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid var(--gray-300);
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const MainHeader = styled.div`
  ${MaxWidthWrapper};
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: center;
  height: 72px;
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
