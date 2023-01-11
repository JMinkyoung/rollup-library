import React from "react";
import styled from "styled-components";

import { TestComponentProps } from "./TestComponent.type";

const StyledHead = styled.h1 `
  color: cadetblue;
`;

const test: React.FC<TestComponentProps> = ({ heading, content }) => {
  return (
    <div>
      <StyledHead>
        {heading}
      </StyledHead>
      <div>{content}</div>
    </div>
  )
}

export default test;