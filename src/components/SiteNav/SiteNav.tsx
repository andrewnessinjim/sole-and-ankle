"use client";

import * as React from "react";
import styled from "styled-components";

function SiteNav() {
  return (
    <Wrapper>
      <NavLink href="/sale">A&nbsp;VENDRE</NavLink>
      <NavLink href="/new">Nouvelles&nbsp;Versions</NavLink>
      <NavLink href="/men">Hommes</NavLink>
      <NavLink href="/women">Femmes</NavLink>
      <NavLink href="/kids">LES&nbsp;ENFANTS</NavLink>
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
