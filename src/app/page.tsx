"use client";

import Header from "@/components/Header";
import ShoeIndex from "@/components/ShoeIndex";
import Spacer from "@/components/Spacer";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header/>
      <Spacer size={64} axis="vertical"/>
      <Main>
        <ShoeIndex/>
      </Main>
    </>
  );
}

const Main = styled.main``;