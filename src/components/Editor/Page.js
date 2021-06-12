import React from 'react'
import styled from 'styled-components';
import Layout from '../Layout';
import PageInput from './PageInput';
import useCodeEditor from '../../hooks/useCodeEditor';

const PageLayout = styled(Layout)`
  margin: 0 auto;
  background-color: white;
  width: 55%;
  /* height: 100rem; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 5rem;
  @media only screen and (max-width: 600px) {
    width: 100%
  }
`;

const Page = () => {
  const [value, documentRef] = useCodeEditor();

  return (
    <PageLayout>
      <PageInput
        ref={documentRef}
        contentEditable={true}
      >
        {value}
      </PageInput>
    </PageLayout>
  )
}

export default Page
