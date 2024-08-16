"use client";

import Header from "@/components/Header";
import ShoeIndex from "@/components/ShoeIndex";
import Spacer from "@/components/Spacer";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header/>
      <Spacer size={64} when={{tabletAndBelow: 48}}/>
      <Main>
        <ShoeIndex/>
      </Main>
    </>
  );
}

const Main = styled.main``;