import styled from "styled-components/macro"
import { COLORS, SIZES } from "../../constants"

export default function MainHeader() {
    return (
        <BGExtension>
            <Wrapper>
                <LogoContainer>
                    <h1>Sole&Ankle</h1>
                </LogoContainer>
                <nav>
                    <NavList>
                        <NavItem><NavLink href="/">Sale</NavLink></NavItem>
                        <NavItem><NavLink href="/">New Releases</NavLink></NavItem>
                        <NavItem><NavLink href="/">Men</NavLink></NavItem>
                        <NavItem><NavLink href="/">Women</NavLink></NavItem>
                        <NavItem><NavLink href="/">Kids</NavLink></NavItem>
                        <NavItem><NavLink href="/">Collections</NavLink></NavItem>
                    </NavList>
                </nav>
            </Wrapper>
        </BGExtension>)
}

const BGExtension = styled.div`
    border-bottom: 1px solid ${COLORS.gray[300]};
`

const Wrapper = styled.div`
    padding-left: 32px;
    padding-right: 32px;
    max-width: ${SIZES.siteContentWidth};
    margin-left: auto;
    margin-right: auto;
    position: relative;
`;

const LogoContainer = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    color: ${COLORS.gray[900]};
`;

const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    gap: 48px;
    justify-content: center;
    align-items: center;
    height: ${72/16}rem;
`;

const NavItem = styled.li`

`;

const NavLink = styled.a`
    color: ${COLORS.gray[900]};
    text-decoration: none;
    text-transform: uppercase;
`;