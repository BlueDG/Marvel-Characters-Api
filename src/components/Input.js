import React from "react";
import styled from "styled-components";

export default function Input({ setRequest }) {
  return (
    <InputText
      type="text"
      placeholder="Search"
      onChange={e => setRequest(e.target.value)}
    />
  );
}

const InputText = styled.input`
  padding: 1%;
  margin-bottom: 1%;
  border: 5px solid black;
  border-radius: 10px;
  width: 30%;
  &:focus {
    outline: none !important;
  }
`;
