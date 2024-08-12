"use client";

import Image from "next/image";
import * as React from "react";
import styled from "styled-components";
import Spacer from "../Spacer";
import SHOES from "@/data";

function ShoeCard({ imageSrc, name, numOfColors, price, salePrice } : Props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <StImage src={imageSrc} alt={name} fill/>
      </ImageWrapper>
      <Spacer size={14}/>
      <ProductInfo>
        <ProductTitle>
          <Name>{name}</Name>
          <Colors>{numOfColors} Colors</Colors>
        </ProductTitle>
        <ProductPricing>
          <ActualPrice>${price/100}</ActualPrice>
          <SalePrice>{salePrice}</SalePrice>
        </ProductPricing>
      </ProductInfo>
    </Wrapper>
  );
}

export default ShoeCard;

const Wrapper = styled.article`
  flex-basis: 280px;
  flex-shrink: 1;
  flex-grow: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
`;

const StImage = styled(Image)`
  width: 100%;
  object-fit: contain;
  background-color: #F5F5F5;
  border-radius: 16px 16px 4px 4px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductTitle = styled.div`
  
`;

const ProductPricing = styled.div`
  color: var(--gray-900);
  font-size: 1rem;
  font-weight: var(--weight-normal);
`;

const Name = styled.h2`
  font-weight: var(--weight-medium);
  font-size: 1rem;
  color: var(--gray-900);
`;

const Colors = styled.p`
  color: var(--gray-700);
`;

const ActualPrice = styled.p``;

const SalePrice = styled.p``;

// interface Props {
//   imageSrc: string,
//   name: string,
//   numOfColors: number,
//   price: number,
//   salePrice: number,
//   key: string,
  
// }

type Props = typeof SHOES[0];