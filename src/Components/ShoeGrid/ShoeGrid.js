import styled from "styled-components/macro";
import SHOES from "../../data";
import ShoeCard from "../ShoeCard/ShoeCard";

export default function ShoeGrid() {
    return (
        <Wrapper>
            {SHOES.map(shoeData => <ShoeCard shoeData={shoeData}/>)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 36px
`;