import styled  from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  @media only screen and (max-width: 600px) {
    margin: 0;
  }
`;

export default Layout;