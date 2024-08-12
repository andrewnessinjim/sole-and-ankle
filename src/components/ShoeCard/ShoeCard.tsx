"use client";

import Image from "next/image";
import * as React from "react";
import styled from "styled-components";
import Spacer from "../Spacer";
import SHOES from "@/data";
import { formatPrice, isNewShoe, pluralize } from "@/utils";

type VariantType = "on-sale" | "new-release" | "default";

function ShoeCard({
  imageSrc,
  name,
  numOfColors,
  price,
  salePrice,
  releaseDate,
}: Props) {
  const variant: VariantType =
    typeof salePrice === "number"
      ? "on-sale"
      : isNewShoe(releaseDate)
        ? "new-release"
        : "default";

  const onSale = variant === "on-sale";
  const isNew = variant === "new-release";

  return (
    <Wrapper>
      <ImageWrapper>
        <StImage src={imageSrc} alt={name} fill />
      </ImageWrapper>
      <Spacer size={14} />
      <ProductInfo>
        <ProductTitle>
          <Name>{name}</Name>
          <Colors>
            {numOfColors} {pluralize("Color", numOfColors)}
          </Colors>
        </ProductTitle>
        <ProductPricing>
          <Price onSale={onSale}>{formatPrice(price)}</Price>
          {onSale && <SalePrice>{formatPrice(salePrice ?? 0)}</SalePrice>}
        </ProductPricing>
      </ProductInfo>
      {onSale && <Tag style={{"--tag-background": "var(--primary"}}>Sale</Tag>}
      {isNew && <Tag style={{"--tag-background": "var(--secondary"}}>Just Released!</Tag>}
    </Wrapper>
  );
}

export default ShoeCard;

const Wrapper = styled.article`
  flex-basis: 280px;
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
`;

const StImage = styled(Image)`
  width: 100%;
  object-fit: contain;
  background-color: #f5f5f5;
  border-radius: 16px 16px 4px 4px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductTitle = styled.div``;

const ProductPricing = styled.div`
  font-size: 1rem;
`;

const Name = styled.h2`
  font-weight: var(--weight-medium);
  font-size: 1rem;
  color: var(--gray-900);
`;

const Colors = styled.p`
  color: var(--gray-700);
`;

const Price = styled("p")<{
  onSale: boolean;
}>`
  font-weight: var(--weight-normal);
  color: ${(p) => (p.onSale ? "var(--gray-700)" : "var(--gray-900)")};
  text-decoration: ${(p) => (p.onSale ? "line-through" : "revert")};
`;

const SalePrice = styled.p`
  font-weight: var(--weight-medium);
  color: var(--primary);
`;

const Tag = styled("p")<{
  style: {"--tag-background": string}
}>`
  background-color: var(--tag-background);
  font-weight: var(--weight-medium);
  color: var(--white);
  border-radius: 2px;
  padding: 4px 8px;
  position: absolute;
  right: -4px;
  top: 12px;
  font-size: ${14/16}rem;
`;

type Props = (typeof SHOES)[0];
