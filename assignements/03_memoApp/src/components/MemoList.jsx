import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addMemo, deleteMomo, updateMemo } from "../redux/slice/memoListSlice";
import MemoItem from "./MemoItem";

const MemoList = () => {
  const today = new Date();
  // redux
  const { memoList, dumpMemo } = useSelector((state) => ({
    memoList: state.memoList,
    dumpMemo: state.dumpMemo,
  }));
  const dispatch = useDispatch();
  const lastMemoRef = useRef(null);

  //useState
  const [isNewMemoAdded, setIsNewMemoAdded] = useState(false);
  const [selectedMemoId, setSelectedMemoId] = useState(null);

  useEffect(() => {
    dispatch(updateMemo(dumpMemo));
  }, [dumpMemo]);

  useEffect(() => {
    if (isNewMemoAdded) {
      lastMemoRef.current?.focus();
      setIsNewMemoAdded(false);
    }
  }, [memoList, isNewMemoAdded]);
  useEffect(() => {
    if (selectedMemoId === null && memoList.length > 0) {
      setSelectedMemoId(memoList[memoList.length - 1].id);
    }
  }, [memoList, selectedMemoId]);

  const handleMemoClick = (id) => {
    setSelectedMemoId(id);
  };

  const handleAddMemo = () => {
    const newMemo = {
      id: today.getTime(),
      time: today.toLocaleTimeString().substring(0, 7),
      content: "",
    };
    dispatch(addMemo(newMemo));
    setIsNewMemoAdded(true);
    setSelectedMemoId(newMemo.id);
  };

  const handleDeleteMemo = () => {
    if (memoList.length == 1) {
      alert("최소 1개 이상의 메모는 존재해야 합니다.");
      return;
    }
    if (selectedMemoId !== null) {
      dispatch(deleteMomo(selectedMemoId));
      setSelectedMemoId(null);
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

const ListWrapper = styled.div`
  margin: 0;
  width: 30%;
  min-width: 20%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const Button = styled.button`
  border: none;
  background-color: white;

  font-weight: 600;
  font-size: 15px;
  color: gray;
  &:hover {
    color: black;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;
