import { create } from "zustand";
import { persist } from "zustand/middleware";
// ()=>({}) : 객체를 리턴 하는 형식

// produce("수정하고 싶은 원본", "수정할 작업(함수) : recipy")
const useLoginStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      logIn: () => set(() => ({ isLoggedIn: true })),
      logOut: () => set(() => ({ isLoggedIn: false })),

      toggleIsLoggedIn: () => {
        const prevState = get();
        // set 하기 전에
        // 어딘가 통신을 하고 데이터를 가져와야 한다 등의 일이 있을 수 있음
        //
        set({ isLoggedIn: !prevState.isLoggedIn });
      },
    }),
    {
      name: "login-store",
    }
  )
);

export default useLoginStore;
