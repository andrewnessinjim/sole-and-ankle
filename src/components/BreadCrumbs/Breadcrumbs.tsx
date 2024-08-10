"use client";

import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.nav``;
const BreadcrumbList = styled.ol`
  display: flex;
  font-size: ${14 / 16}rem;
  font-weight: 500;
  color: var(--gray-700);
`;

type CrumbsArray =
   React.ReactElement<typeof Breadcrumbs.Crumb>
  | React.ReactElement<typeof Breadcrumbs.Crumb>[];
interface BreadcrumbsProps {
  children: CrumbsArray;
}

function Breadcrumbs({ children }: BreadcrumbsProps) {
  return (
    <Wrapper aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </Wrapper>
  );
}

interface CrumbProps {
  children: string;
  href: string;
}

const CrumbLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: revert;
  }
`;

const CrumbItem = styled.li`
  &:not(:last-of-type)::after {
    content: "";
    display: inline-block;
    margin-left: 8px;
    margin-right: 8px;
    height: 0.8em;
    transform: rotate(15deg);
    border-right: 1px solid var(--gray-500);
  }
`;

Breadcrumbs.Crumb = function Crumb({
  children,
  href,
}: CrumbProps): React.JSX.Element {
  return (
    <CrumbItem>
      <CrumbLink href={href}>{children}</CrumbLink>
    </CrumbItem>
  );
};

export default Breadcrumbs;
