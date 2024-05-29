import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMemo,
  deleteMomo,
  updateMemo,
} from "../../redux/slice/memoListSlice";
import MemoItem from "../MemoItem";
import { Button, ButtonWrapper, ListWrapper } from "./MemoList.styled";

const MemoList = () => {
  // redux
  const { memoList, dumpMemo } = useSelector((state) => ({
    memoList: state.memoList,
    dumpMemo: state.dumpMemo,
  }));
  const dispatch = useDispatch();
  const lastMemoRef = useRef(null);

  //useState
  const [isNewMemoAdded, setIsNewMemoAdded] = useState(false); // 메모가 작성중임을 나타내는 state
  const [selectedMemoId, setSelectedMemoId] = useState(null); // 선택된 id 값을 나타내는 state

  useEffect(() => {
    // dumpMemo 가 변경될 때 마다,
    dispatch(updateMemo(dumpMemo));
  }, [dumpMemo, dispatch]);

  useEffect(() => {
    // memoList 와 isNewMemoAdded 가 변경될 때 마다,
    if (isNewMemoAdded) {
      lastMemoRef.current?.focus();
      setIsNewMemoAdded(false);
    }
  }, [memoList, isNewMemoAdded]);

  useEffect(() => {
    // memoList ,와 selectedMemoId가 변경될 때 마다
    if (selectedMemoId === null && memoList.length > 0) {
      // 선택된 Id 값이 null이고 memoList에 값이 있다면,
      setSelectedMemoId(memoList[memoList.length - 1].id);
    }
  }, [memoList, selectedMemoId]);

  // 선택한 ID 값 Set
  const handleMemoClick = (id) => {
    setSelectedMemoId(id);
  };

  // 메모 추가
  const handleAddMemo = () => {
    const today = new Date();
    const newMemo = {
      id: today.getTime(),
      time: today.toLocaleTimeString().substring(0, 7),
      content: "",
    };
    dispatch(addMemo(newMemo));
    setIsNewMemoAdded(true);
    setSelectedMemoId(newMemo.id); // 최근 추가된 memo 의 Id 선택
  };

  // 메모 삭제
  const handleDeleteMemo = () => {
    if (memoList.length == 1) {
      alert("최소 1개 이상의 메모는 존재해야 합니다.");
      return;
    }
    if (selectedMemoId !== null) {
      dispatch(deleteMomo(selectedMemoId));
      setSelectedMemoId(memoList[0].id); // 가장 최신의 메모 Id 선택
    }
  };

  return (
    <ListWrapper>
      <ButtonWrapper>
        <Button onClick={handleAddMemo}>새 메모 추가하기</Button>
        <Button onClick={handleDeleteMemo}>삭제</Button>
      </ButtonWrapper>
      {memoList.map((memo, index) => {
        const isLastMemo = index === memoList.length - 1;
        const isFirstMemo = index === 0 && memoList.length === 1;
        return (
          <div
            key={memo.id}
            tabIndex={0}
            ref={isLastMemo || isFirstMemo ? lastMemoRef : null}
            aria-label={`메모 ${index + 1}: ${memo.content.substring(
              0,
              50
            )}...`} // 접근성 개선을 위해 aria-label 추가
          >
            <MemoItem
              memo={memo}
              onClick={() => handleMemoClick(memo.id)}
              isSelected={memo.id === selectedMemoId}
            />
          </div>
        );
      })}
    </ListWrapper>
  );
};

export default MemoList;
