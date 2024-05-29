import styled from "styled-components";

const ListWrapper = styled.div`
  margin: 0;
  width: 300px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;

  font-weight: 600;
  font-size: 15px;
  color: gray;
  &:hover {
    color: black;
  }
`;
const List = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;
export { Button, ButtonWrapper, List, ListWrapper };
