import styled from "styled-components/macro"
import { COLORS, SIZES } from "../../constants"

export default function MainHeader() {
    return (
        <BGExtension>
            <Wrapper>
                <Side>
                    <LogoContainer>
                        <h1>Sole&Ankle</h1>
                    </LogoContainer>
                </Side>
                <Nav>
                    <NavList>
                        <NavItem><NavLink href="/">Sale</NavLink></NavItem>
                        <NavItem><NavLink href="/">New&nbsp;Releases</NavLink></NavItem>
                        <NavItem><NavLink href="/">Men</NavLink></NavItem>
                        <NavItem><NavLink href="/">Women</NavLink></NavItem>
                        <NavItem><NavLink href="/">Kids</NavLink></NavItem>
                        <NavItem><NavLink href="/">Collections</NavLink></NavItem>
                    </NavList>
                </Nav>
                <Side/>
            </Wrapper>
        </BGExtension>)
}

const BGExtension = styled.div`
    border-bottom: 1px solid ${COLORS.gray[300]};
`

const Wrapper = styled.div`
    max-width: ${SIZES.siteContentWidth};
    margin-left: auto;
    margin-right: auto;
    height: ${72/16}rem;
    display: flex;
    align-items: baseline;
    padding: 12px 32px;
`;

const Side = styled.div`
    flex: 1;
`;
const LogoContainer = styled.div`
    color: ${COLORS.gray[900]};
    margin-right: 48px;
`;

const Nav = styled.nav`
    
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