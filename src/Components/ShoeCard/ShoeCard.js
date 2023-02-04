import styled from "styled-components/macro";
import { COLORS } from "../../constants";
import Spacer from "../Spacer";

export default function ShoeCard({shoeData}){
    const {imageSrc, name, numOfColors, price} = shoeData;
    return (
        <Wrapper>
            <ImageWrapper>
                <Img src={imageSrc} alt={name}/>
            </ImageWrapper>
            <Spacer size={12} />
            <Row>
                <Name>{name}</Name>
                <Price>${price/100}</Price>
            </Row>
            <Spacer size={6} />
            <Row>
                <ColorInfo>{numOfColors} Colors</ColorInfo>
            </Row>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    flex: 1;
    flex-basis: 260px;
`;

const ImageWrapper = styled.div`
`;

const Img = styled.img`
    width: 100%;
`;

const Row = styled.div`
    display: flex;
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
    margin-right: auto;
`;

const Price = styled.span`
    font-weight: 500;
    font-size: 1rem;
    line-height: ${19/16};
    color: ${COLORS.gray[900]};
`;