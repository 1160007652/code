'use client';

import Modal from "@/components/Modal";
import styled from "styled-components";

const MainWrap = styled.div`
  background: #b7b7b7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Home() {
  return (
    <MainWrap >
     <Modal>
      x
     </Modal>
    </MainWrap>
  );
}
