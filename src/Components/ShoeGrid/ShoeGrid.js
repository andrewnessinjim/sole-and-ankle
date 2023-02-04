import styled from "styled-components/macro";
import SHOES from "../../data";
import ShoeCard from "../ShoeCard/ShoeCard";

export default function ShoeGrid() {
    return (
        <Wrapper>
            {SHOES.map(shoeData => <ShoeCard 
                key={shoeData.slug}
                shoeData={shoeData}/>)}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px
`;