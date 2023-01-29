import styled from "styled-components/macro"
import { COLORS, SIZES } from "../../constants"
import Icon from "../Icon/Icon"
import IconInput from "../IconInput/IconInput"

const BG_COLOR = COLORS.gray[900];
export default function SuperHeader() {
    return(
        <BGExtension>
            <Wrapper>
                <Message>Free shipping on domestic orders over $75! </Message>
                <SearchInput
                    icon="search"
                    size="small"
                    placeholder="Search..."
                    width="175"
                    iconColor={COLORS.gray[300]}
                    textColor={COLORS.gray[500]} />
                <HelpButton>Help</HelpButton>
                <Icon id="shopping-bag"/>
            </Wrapper>
        </BGExtension>)
}
const BGExtension = styled.div`
    background-color: ${BG_COLOR};
`;
const Wrapper = styled.div`
    background-color: ${BG_COLOR};
    color: ${COLORS.white};
    display: flex;
    align-items: center;
    gap: 24px;
    height: ${40/16}rem;
    font-size: ${14/16}rem;
    padding-left: 32px;
    padding-right: 32px;
    max-width: ${SIZES.siteContentWidth};
    margin-left: auto;
    margin-right: auto;
`

const HelpButton = styled.button`
    background: none;
    border: none;
    color: ${COLORS.gray[300]}
`;

const SearchInput = styled(IconInput)`
    background-color: inherit;
`;

const Message = styled.p`
    margin-right: auto;
`;