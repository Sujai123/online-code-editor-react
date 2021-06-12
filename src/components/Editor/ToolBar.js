import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import TextStyle from '../Toolbars/TextStyle';
import TextFormatting from '../Toolbars/TextFormatting';

const ToolBarLayout = styled(Layout)`
  background-color: rgba(167, 243, 208, 1);
  padding: 1rem 2rem;
  border-radius: 8px;
  border: 2px solid rgba(110, 231, 183, 1);
  display: flex;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px
`;

const ToolBar = () => {
  return (
    <ToolBarLayout>
      <Container>
        <TextStyle />
        <TextFormatting />
      </Container>
    </ToolBarLayout>
  )
}

export default ToolBar
