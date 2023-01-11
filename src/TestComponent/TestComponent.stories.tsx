import React from "react";
import TestComponent from "./TestComponent";

export default {
  title: "TestComponent"
};

export const WithText = () => (
  <TestComponent
    heading="With Text Test"
    content={<h2>Content 테스트</h2>}
  />
);

export const WithButtons = () => (
  <TestComponent
    heading="With Buttons Test"
    content={
      <div>
        <button onClick={() => alert("You clicked me!")}>Click me</button>
      </div>
    }
  />
);