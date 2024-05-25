import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setDumpMemo } from "../redux/slice/dumpMemoSlice";
import nowDate from "../utils/nowDate";

const MemoForm = () => {
  const dispatch = useDispatch();
  const dumpMemo = useSelector((state) => state.dumpMemo);
  const onChangeDumpMemo = (e) => {
    e.preventDefault();
    dispatch(
      setDumpMemo({
        id: dumpMemo.id,
        time: new Date().toLocaleTimeString().substring(0, 7),
        content: e.target.value,
      })
    );
  };

  return (
    <MemoInputContainer>
      <DateSpan>{nowDate()}</DateSpan>
      <MemoInput value={dumpMemo.content} onChange={onChangeDumpMemo} />
    </MemoInputContainer>
  );
};

export default MemoForm;

const DateSpan = styled.span`
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.5);
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
