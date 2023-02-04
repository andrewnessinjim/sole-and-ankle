import styled from "styled-components"
import { SIZES } from "../../constants";
import Breadcrumbs from "../Breadcrumbs";

export default function ShoeIndex(){
    return(
        <Wrapper>
            <LeftColumn>
                <Breadcrumbs>
                    <Breadcrumbs.Crumb href="/">Andrew</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href="/">Nessin</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href="/">Jim</Breadcrumbs.Crumb>
                </Breadcrumbs>
            </LeftColumn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: ${SIZES.siteContentWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
`;

const LeftColumn = styled.div`
`;