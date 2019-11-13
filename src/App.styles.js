import styled from "styled-components";

import { Container } from "@material-ui/core";

export const MainContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;
