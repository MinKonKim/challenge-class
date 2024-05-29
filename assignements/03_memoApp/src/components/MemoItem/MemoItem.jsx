import { useDispatch } from "react-redux";
import { setDumpMemo } from "../../redux/slice/dumpMemoSlice";
import { Content, ItemWrapper, Time, Wrapper } from "./MemoItem.styled";

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
