import styled from "styled-components";

const ModalWrap = styled.div`
  width: 480px;
  height: 600px;
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0px 0px 18px 4px rgba(0, 0, 0, 0.3);
`;

interface IModal {
  children: React.ReactNode;
}
const Modal: React.FC<IModal> = ({ children }) => {
  return <ModalWrap>{children}</ModalWrap>;
};

export default Modal;
