import "./App.css";
import { useModal } from "./contexts/modal.context";

function App() {
  const modal = useModal();
  const handleClickButton = () =>
    modal.open({ title: "제목", content: "콘텐츠" });

  return (
    <main>
      <button onClick={handleClickButton}>모달 띄우기</button>
      {Array(5000)
        .fill(0)
        .map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
    </main>
  );
}

export default App;
