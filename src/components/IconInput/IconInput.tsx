"use client";

import * as React from "react";
import { Icon } from "react-feather";
import styled from "styled-components";

const SIZE_VARIANTS = {
  small: {
    cssVars: {
      "--fontSize": "0.875rem",
      "--borderBottom": "1px solid currentColor",
      "--padding": "4px 4px 4px 24px",
      "--icon-position-top": "4px",
      "--icon-stroke-width": "1px",
    },
    iconSize: "16px",
  },
  large: {
    cssVars: {
      "--fontSize": "1.125rem",
      "--borderBottom": "2px solid currentColor",
      "--padding": "8px 8px 8px 36px",
      "--icon-position-top": "6px",
      "--icon-stroke-width": "2px",
    },
    iconSize: "24px",
  },
};

const Wrapper = styled.div`
  position: relative;
`;

type Props = {
  label: string;
  DisplayIcon: Icon;
  width: number;
  size: "small" | "large";
  placeholder: string;
};

const StInput = styled.input`
  background: none;
  border: none;
  font-size: var(--fontSize);
  border-bottom: var(--borderBottom);
  padding: var(--padding);
  width: var(--input-width);
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400
  }
`;

const StDisplayIconWrapper = styled.div`
  position: absolute;
  top: var(--icon-position-top);
  left: 0;
`;

function IconInput({
  label,
  DisplayIcon,
  width = 250,
  size,
  placeholder,
}: Props) {
  return (
    <Wrapper
      style={{
        ...SIZE_VARIANTS[size].cssVars,
        "--input-width": `${width}px`,
      }}
    >
      <StDisplayIconWrapper>
        <DisplayIcon
          size={SIZE_VARIANTS[size].iconSize}
          style={{
            strokeWidth: "var(--icon-stroke-width)",
          }}
        />
      </StDisplayIconWrapper>
      <StInput
        style={{ color: "white" }}
        type="text"
        placeholder={placeholder}
      ></StInput>
    </Wrapper>
  );
}

export default IconInput;
