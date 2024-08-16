"use client";

import * as React from "react";
import styled from "styled-components";
import { getDisplayedValue } from "./Select.helpers";
import { ChevronDown } from "react-feather";

function Select({ label, children, value }: Props) {
  const [currentValue, setCurrentValue] = React.useState(value);

  const displayedValue = getDisplayedValue(currentValue, children);
  return (
    <Wrapper>
      <VisibleLabel>{label}</VisibleLabel>
      <SelectWrapper>
        <HiddenSelect
          title={label}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        >
          {children}
        </HiddenSelect>
        <Presentational>
          <SelectedValue>{displayedValue}</SelectedValue>{" "}
          <StChevronDown size="24px" strokeWidth="2px" />
        </Presentational>
      </SelectWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SelectWrapper = styled.div`
  font-size: 1rem;
  width: fit-content;
  position: relative;
`;

const HiddenSelect = styled.select`
  position: absolute;
  inset: 2px;
  outline-offset: 5px;
  border-radius: 8px;
`;

const SelectedValue = styled.p``;

const StChevronDown = styled(ChevronDown)``;

const Presentational = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  gap: 16px;
  padding: 12px 16px;
  background-color: var(--gray-100);
  color: var(--gray-700);
  position: relative;
  pointer-events: none;
  font-weight: 600;

  ${HiddenSelect}:hover + & {
    color: var(--gray-900);
  }
`;

const VisibleLabel = styled.span``;

type OptionsArray = React.ReactElement<HTMLOptionElement>[];

type Props = {
  label: string;
  children: OptionsArray;
  value: string;
};

export default Select;
