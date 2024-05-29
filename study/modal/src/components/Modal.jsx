import { useModal } from "../contexts/modal.context";
import BackDrop from "./BackDrop";

function Modal({ title, content }) {
  const modal = useModal();
  return (
    <BackDrop>
      <article className="modal">Modal</article>
      <h1>{title}</h1>
      <span>{content}</span>
      <button onClick={() => modal.close()}>닫기</button>
    </BackDrop>
  );
}

export default Modal;
