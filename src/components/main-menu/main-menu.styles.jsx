import styled from "styled-components";

import { Container } from "@material-ui/core";

export const MainMenuContainer = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;
