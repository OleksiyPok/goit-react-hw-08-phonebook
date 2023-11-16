import styled from 'styled-components';

export const ModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform: scale(0); */

  /* &.active {
    transform: scale(1);
  } */
`;

export const ModalWindow = styled.form`
  border: 2px solid;
  border-radius: 5px;
  margin-bottom: 20px;
  max-width: 350px;
  width: 100%;
  padding: 20px;
  background-color: white;
`;

export const TitleStyled = styled.h2`
  color: darkblue;
  text-align: center;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelStyled = styled.label`
  margin-bottom: 10px;
  margin-right: auto;
`;

export const InputStyled = styled.input`
  margin-bottom: 20px;
  width: 100%;
`;

export const ButtonStyled = styled.button`
  margin-top: 20px;
`;
