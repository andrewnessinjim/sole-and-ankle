import styled from "styled-components";
import { COLORS } from "../../constants";

export default function Breadcrumbs({children, className}) {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

Breadcrumbs.Crumb = function({href, children}) {
    return(
        <CrumbWrapper>
            <CrumbLink href={href}>{children}</CrumbLink>
        </CrumbWrapper>
    )
}

const Wrapper = styled.nav`
    display: flex;
`;

const CrumbWrapper = styled.div`
    display: flex;
    align-items: center;

    &:not(:first-of-type)::before {
        content: "/";
        padding-left: 8px;
        padding-right: 8px;
        color: ${COLORS.gray[500]}
    }
`;

const CrumbLink = styled.a`
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: ${14/16}rem;
    font-weight: 500;

    &:hover {
        color: ${COLORS.gray[900]};
    }

`;