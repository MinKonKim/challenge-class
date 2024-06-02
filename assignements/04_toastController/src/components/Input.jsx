import { nanoid } from "nanoid";
import { useState } from "react";
import { useToasts } from "../contexts/toasts.context";

function Input() {
  const [title, setTitle] = useState("제목");
  const [content, setContent] = useState("내용");
  const [delay, setDelay] = useState(1);

  const toasts = useToasts();
  const handleClick = () => {
    toasts.open({
      id: nanoid(),
      title: title,
      content: content,
      delay: Number(delay) || 2000,
    });
  };
  return (
    <div className="flex flex-col bg-white p-10 rounded shadow">
      <label className="mt-5">제목 (필수)</label>
      <input
        className="border p-2 "
        type="text"
        placeholder="제목을 입력해주세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label className="mt-5">내용 (필수)</label>
      <input
        className="border p-2 "
        type="text"
        placeholder="제목을 입력해주세요."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <label className="mt-5">노출시간(ms) 선택</label>
      <input
        className="border p-2"
        type="number"
        placeholder="제목을 입력해주세요."
        value={delay}
        onChange={(e) => setDelay(e.target.value)}
      />
      <button
        className="mt-5 bg-gray-100 p-5 hover:bg-blue-500"
        onClick={handleClick}
      >
        토스트 띄우기
      </button>
    </div>
  );
}

export default Input;
