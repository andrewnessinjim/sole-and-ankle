"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as React from "react";
import { X } from "react-feather";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton";
import SiteNav from "../SiteNav";

function MobileMenu({ children }: { children: React.JSX.Element }) {
  return (
    <Wrapper>
      <MenuTrigger>
        {children}
      </MenuTrigger>
      <Dialog.Portal>
        <MenuOverlay/>
        <MenuContent>
          <VisuallyHidden>
            <Dialog.Title>Categories Menu</Dialog.Title>
          </VisuallyHidden>
          <VisuallyHidden>
            <Dialog.Description>
              List of categories to choose products from
            </Dialog.Description>
          </VisuallyHidden>
          <MenuClose>
            <X size={24} />
          </MenuClose>
          <Filler/>
          <MobileNavWrapper>
            <SiteNav />
          </MobileNavWrapper>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </MenuContent>
      </Dialog.Portal>
    </Wrapper>
  );
}
const Wrapper = styled(Dialog.Root)``;

const MenuTrigger = styled(Dialog.Trigger)`
  ${UnstyledButton}
`;

const MenuOverlay = styled(Dialog.Overlay)`
  background-color: var(--gray-700);
  opacity: 0.8;
  position: fixed;
  inset: 0;
`;

const MenuContent = styled(Dialog.Content)`
  background-color: var(--white);
  position: fixed;
  right: 0px;
  top: 0px;
  height: 100%;
  width: 300px;
  padding: 26px 16px 32px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuClose = styled(Dialog.Close)`
  ${UnstyledButton};
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filler = styled.div`
  flex: 1;
`;

const MobileNavWrapper = styled.div`
  --nav-flex-direction: column;
  --nav-gap: 16px;
  --nav-align-items: flex-start;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--gray-700);
  font-size: ${14 / 16}rem;
`;

export default MobileMenu;
