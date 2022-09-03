import React from 'react';
import {Header} from "./components/header/header";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.background};
`

function App() {
  return (
    <Container className="App">
      <Header />
    </Container>
  );
}

export default App;
