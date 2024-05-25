function nowDate() {
  //한국 시간 구하기
  const now = new Date();

  return `${now.getFullYear()}년 ${
    now.getMonth() + 1
  }월 ${now.getDate()}일 ${now.toLocaleTimeString().substring(0, 7)}`;
}

export default nowDate;
