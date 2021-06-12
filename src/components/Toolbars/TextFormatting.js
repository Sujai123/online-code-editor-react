import React from 'react'
import styled from 'styled-components';

const StyledIcon = styled.div`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px
`;

const TextFormatting = () => {
  return (
    <Container>
      <StyledIcon>
        <b>B</b>
      </StyledIcon>
      <StyledIcon>
        <b><i>I</i></b>
      </StyledIcon>
    </Container>
  )
}

export default TextFormatting
