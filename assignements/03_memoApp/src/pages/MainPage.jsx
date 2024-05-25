import styled from "styled-components";
import MemoForm from "../components/MemoForm";
import MemoList from "../components/MemoList";

const MainPage = () => {
  return (
    <Main>
      <Sub>
        <MemoList />
        <MemoForm />
      </Sub>
    </Main>
  );
};

export default MainPage;
const Main = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100vh;
`;
const Sub = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 45vh;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
`;
