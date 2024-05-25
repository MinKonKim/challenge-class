import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setDumpMemo } from "../redux/slice/dumpMemoSlice";

const MemoItem = ({ memo, onClick, isSelected }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setDumpMemo(memo));
    onClick();
  };

  return (
    <ItemWrapper onClick={handleClick}>
      <Wrapper isSelected={isSelected}>
        <Content>{memo.content === "" ? "새로운 메모" : memo.content}</Content>
        <Time>{memo.time}</Time>
      </Wrapper>
    </ItemWrapper>
  );
};

export default MemoItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;

  height: 70px;

  margin: 10px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  background-color: ${(props) => (props.isSelected ? "#fccf2b" : "white")};
  margin-top: 10px;
  margin-left: 10px;

  padding: 10px;
  border-radius: 5px;
`;
const Content = styled.div`
  font-weight: 1000;
  color: black;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666; /* 내용에 대한 추가 스타일링 */
`;

const Time = styled.div`
  margin-top: 5px;
  color: "#1111";
`;
