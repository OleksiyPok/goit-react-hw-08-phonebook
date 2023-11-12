import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  border: 1px solid;
  padding: 20px;
  border-radius: 6px;
`;

export const FormItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LabelStyled = styled.label`
  width: 15%;
`;

export const InputStyled = styled.input`
  width: 80%;
`;

export const ButtonStyled = styled.button`
  margin-top: 14px;
  width: 30%;
  margin-left: auto;
  cursor: pointer;
`;
