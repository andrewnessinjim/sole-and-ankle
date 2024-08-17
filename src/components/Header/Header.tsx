"use client";

import * as React from "react";
import styled from "styled-components";
import SuperHeader from "../SuperHeader";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import { MEDIA_QUERIES } from "@/constants";
import { Icon, Menu, Search, ShoppingBag } from "react-feather";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import MobileMenu from "../MobileMenu";
import SiteNav from "../SiteNav";

interface ActionIconProps {
  Icon: Icon;
  label: string;
}

function ActionIcon({ Icon, label }: ActionIconProps) {
  return (
    <>
      <Icon strokeWidth={2} size={24} style={{ color: "var(--gray-900)" }} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </>
  );
}

function Header() {
  return (
    <Wrapper>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNavWrapper>
          <SiteNav />
        </DesktopNavWrapper>

        <PhoneActions>
          <ActionIconButton>
            <ActionIcon Icon={ShoppingBag} label="Open cart" />
          </ActionIconButton>
          <ActionIconButton>
            <ActionIcon Icon={Search} label="Search" />
          </ActionIconButton>
          <MobileMenu>
            <ActionIcon Icon={Menu} label="Menu" />
          </MobileMenu>
        </PhoneActions>
        <Filler />
      </MainHeader>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  border-bottom: 1px solid var(--gray-300);
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${MEDIA_QUERIES.tabletAndBelow} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${MEDIA_QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const PhoneActions = styled.div`
  gap: clamp(16px, 5vw - 14px, 32px);
  display: var(--actions-display);
`;

const ActionIconButton = styled.div`
  ${UnstyledButton};
`;

const DesktopNavWrapper = styled.div`
  margin-left: 48px;
  margin-right: clamp(0px, 23vw - 17rem, 48px);
  display: var(--nav-display);
  --nav-gap: clamp(1.5rem, 14vw - 8rem, 4.5rem);
`;

const MainHeader = styled.div`
  ${MaxWidthWrapper};
  display: flex;
  align-items: baseline;
  padding-top: 18px;
  padding-bottom: 18px;
  overflow-x: auto;
  --actions-display: none;
  --nav-display: block;

  @media ${MEDIA_QUERIES.tabletAndBelow} {
    justify-content: space-between;
    align-items: center;
    --actions-display: flex;
    --nav-display: none;
  }
`;

export default Header;
