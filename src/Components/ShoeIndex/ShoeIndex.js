import styled from "styled-components/macro"
import { COLORS, SIZES } from "../../constants";
import Breadcrumbs from "../Breadcrumbs";
import ShoeCategories from "../ShoeCategories";
import Spacer from "../Spacer";
import Select from "../Select";
import ShoeGrid from "../ShoeGrid";

/*Not taking effect for some strange reason! */
const SortSelect = styled(Select)`
    border: 5px solid red;
`;

export default function ShoeIndex(){
    return(
        <Wrapper>
            <MainColumn>
                <Header>
                    <Title>Running</Title>
                    <SortSelect
                        label="Sort"
                        value="newest">
                        <option value="newest">Newest Releases</option>
                        <option value="price">Price</option>
                    </SortSelect>
                </Header>
                <Spacer size={34} />
                <ShoeGrid />
            </MainColumn>
            <LeftColumn>
                <ShoeBreadcrumbs>
                    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href="/">Sale</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href="/">Shoes</Breadcrumbs.Crumb>
                </ShoeBreadcrumbs>
                <Spacer size={36}/>
                <ShoeCategories />
            </LeftColumn>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    max-width: ${SIZES.siteContentWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
`;

const LeftColumn = styled.div`
    order: 1;
    flex-basis: 248px;
    flex-shrink: 0;
`;

const ShoeBreadcrumbs = styled(Breadcrumbs)`
    height: 42px;
    align-self: flex-end;
`;

const MainColumn = styled.div`
    order: 2;
    flex-grow: 1;
`;

const Header = styled.header`
    display: flex;
    height: 42px;
    align-items: center;
`;

const Title = styled.h2`
    color: ${COLORS.gray[900]};
    line-height: 1;
    font-size: ${24/16}rem;
    font-weight: 600;
    margin-right: auto;
`;

