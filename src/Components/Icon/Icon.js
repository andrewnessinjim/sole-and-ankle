import React from 'react';
import styled from 'styled-components/macro';
import {
  Search,
  Menu,
  ShoppingBag,
  ChevronDown,
} from 'react-feather';

const icons = {
  search: Search,
  menu: Menu,
  'shopping-bag': ShoppingBag,
  'chevron-down': ChevronDown,
};

const Icon = ({ id, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper {...delegated}>
      <Component />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
    width: var(--size);
    height: var(--size);
    color: var(--color);
  }
`;

export default Icon;
