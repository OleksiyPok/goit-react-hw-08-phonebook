import styled from 'styled-components';

export const UlStyled = styled.ul`
  width: 100%;
  list-style: square;
`;

export const LiStyled = styled.li`
  padding: 4px;
  /* display: flex; */
`;

export const PStyled = styled.p`
  margin: 0;
  margin-right: auto;
  color: darkblue;
`;

export const SpanStyled = styled.span`
  display: inline-block;
  width: calc((100% - 150px) / 2);
  min-width: 200px;
  text-overflow: ellipsis;
`;

export const ButtonBlock = styled.div`
  border: none;
  display: inline;
`;

export const ButtonStyled = styled.button`
  /* width: 50px; */
  margin-left: 10px;
`;
