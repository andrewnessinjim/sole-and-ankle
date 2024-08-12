"use client";

import SHOES from '@/data';
import * as React from 'react';
import styled from "styled-components";
import ShoeCard from '../ShoeCard';

function ShoeGrid() {
  return <Wrapper>
    {SHOES.map(shoe => (
      <ShoeCard {...shoe} key={shoe.slug}/>
    ))}
  </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;
export default ShoeGrid;