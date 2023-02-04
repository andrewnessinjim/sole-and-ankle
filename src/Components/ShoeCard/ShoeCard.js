import styled from "styled-components/macro";
import { COLORS } from "../../constants";
import Spacer from "../Spacer";

function priceToDisplay(price) {
    return `$${price/100}`
}

export default function ShoeCard({shoeData}){
    const {imageSrc, name, numOfColors, price, salePrice, releaseDate} = shoeData;
    const isOnSale= !!salePrice;
    const isJustReleased = Date.now() - releaseDate <= 1000 * 60 * 60 * 24 * 7;
    const displayJustReleasedTag = !isOnSale && isJustReleased;
    return (
        <Wrapper>
            <ImageWrapper>
                <Img src={imageSrc} alt={name}/>
                {displayJustReleasedTag && <JustReleasedMarker>Just Released!</JustReleasedMarker>}
                {isOnSale && <SaleMarker>Sale</SaleMarker>}
            </ImageWrapper>
            <Spacer size={12} />
            <Row>
                <Name>{name}</Name>
                <Price isOnSale={isOnSale}>
                    {priceToDisplay(price)}
                </Price>
            </Row>
            <Spacer size={6} />
            <Row>
                <ColorInfo>{numOfColors} Colors</ColorInfo>
                {isOnSale && <SalePrice>{priceToDisplay(salePrice)}</SalePrice>}
            </Row>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    flex: 1;
    flex-basis: 260px;
`;

const ImageWrapper = styled.div`
    position: relative;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ColorInfo = styled.p`
    color: ${COLORS.gray[700]};
    font-weight: 500;
    font-size: 1rem;
    line-height: ${19/16};
`;

const Name = styled.h3`
    color: ${COLORS.gray[900]};
    font-size: 1rem;
    font-weight: 600;
    line-height: ${19/16};
`;

const Price = styled.span`
    font-weight: 500;
    font-size: 1rem;
    line-height: ${19/16};
    color: ${COLORS.gray[900]};
    text-decoration: ${p => p.isOnSale && 'line-through'};
`;

const SalePrice = styled(Price)`
    color: ${COLORS.primary};
    font-weight: 600;
`;

const Marker = styled.div`
    padding: 6px 10px;
    border-radius: 2px;
    position: absolute;
    top: 12px;
    right: -4px;
    font-weight: 700;
    color: white;
    font-size: ${14/16}rem;
`;

const SaleMarker = styled(Marker)`
    background: ${COLORS.primary};
`;

const JustReleasedMarker = styled(Marker)`
    background-color: ${COLORS.secondary};
`;