import styled from "styled-components/macro"
import { COLORS, SIZES } from "../../constants"

export default function MainHeader() {
    return (
        <BGExtension>
            <Wrapper>
                <LogoContainer>
                    <h1>Sole&Ankle</h1>
                </LogoContainer>
                <Nav>
                    <NavList>
                        <NavItem><NavLink href="/">Sale</NavLink></NavItem>
                        <NavItem><NavLink href="/">New Releases</NavLink></NavItem>
                        <NavItem><NavLink href="/">Men</NavLink></NavItem>
                        <NavItem><NavLink href="/">Women</NavLink></NavItem>
                        <NavItem><NavLink href="/">Kids</NavLink></NavItem>
                        <NavItem><NavLink href="/">Collections</NavLink></NavItem>
                    </NavList>
                </Nav>
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
    height: ${72/16}rem;
    display: flex;
    position: relative;
`;

const LogoContainer = styled.div`
    color: ${COLORS.gray[900]};
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;

    @media screen and (max-width: 1180px){
        position: static;
        height: initial;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 1180px){
        margin-left: 48px;
    }
`;

const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    gap: 48px;    
`;

const NavItem = styled.li`

`;

const NavLink = styled.a`
    color: ${COLORS.gray[900]};
    text-decoration: none;
    text-transform: uppercase;
`;