import { useDispatch, useSelector } from "react-redux";
import { setDumpMemo } from "../../redux/slice/dumpMemoSlice";
import nowDate from "../../utils/nowDate";
import { DateSpan, MemoInput, MemoInputContainer } from "./MemoForm.styled";

const MemoForm = () => {
  const dispatch = useDispatch();
  const dumpMemo = useSelector((state) => state.dumpMemo);

  const onChangeDumpMemo = (e) => {
    e.preventDefault();
    // DumpMemo에 값을 저장한다.
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
