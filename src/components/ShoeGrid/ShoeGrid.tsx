"use client";

import SHOES from '@/data';
import * as React from 'react';
import styled from "styled-components";
import ShoeCard from '../ShoeCard';

function ShoeGrid() {
  return <Wrapper>
    {SHOES.map(shoe => (
      <ShoeCardWrapper key={shoe.slug}>
        <ShoeCard {...shoe}/>
      </ShoeCardWrapper>
    ))}
  </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ShoeCardWrapper = styled.div`
  flex-basis: 280px;
  flex-shrink: 1;
  flex-grow: 1;  
`;

export default ShoeGrid;