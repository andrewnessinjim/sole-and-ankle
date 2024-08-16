"use client";

import * as React from "react";
import styled from "styled-components";

function SiteNav() {
  return (
    <Wrapper>
      <NavLink href="/sale">Sale</NavLink>
      <NavLink href="/new">New&nbsp;Releases</NavLink>
      <NavLink href="/men">Men</NavLink>
      <NavLink href="/women">Women</NavLink>
      <NavLink href="/kids">Kids</NavLink>
      <NavLink href="/collections">Collections</NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: var(--nav-flex-direction, row);
  gap: var(--nav-gap, 48px);
  align-items: var(--nav-align-items, unset);
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
export default SiteNav;
