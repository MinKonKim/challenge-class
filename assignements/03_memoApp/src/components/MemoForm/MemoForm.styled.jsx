import styled from "styled-components";

const DateSpan = styled.span`
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
`;
const MemoInputContainer = styled.div`
  flex: 1;
  padding: 20px;
`;
const MemoInput = styled.textarea`
  width: 100%;
  height: 98%;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  resize: vertical;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export { DateSpan, MemoInput, MemoInputContainer };
