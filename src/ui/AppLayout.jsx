import { Outlet } from "react-router-dom";
import styled from "styled-components";

import SideBar from "./SideBar";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  overflow: scroll;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <SideBar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
