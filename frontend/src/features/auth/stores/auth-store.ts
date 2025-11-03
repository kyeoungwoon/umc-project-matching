import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface UserInfo {
  name?: string;
  nickname?: string;
  introduction?: string;
  school?: string;
  part?: string;
  role?: string;
}

// TODO: BE 구현 후에 Optional 전부 제거하기
interface User {
  id: string;
  accessToken: string | null;
  info?: UserInfo;
}

interface AuthStoreState {
  user: User | null;
  actions: {
    setUser: (newUser: User) => void;
    clearUser: () => void;
  };
}

const AuthStore = create<AuthStoreState>()(
  devtools(
    persist(
      immer((set) => ({
        user: null,
        actions: {
          setUser: (newUser: User) =>
            set((state) => {
              state.user = { ...state.user, ...newUser };
              // 상태가 null인 경우에도 새로운 유저 정보를 설정할 수 있도록 함
            }),
          clearUser: () => {
            set((state) => {
              state.user = null;
            });
          },
        },
      })),
      {
        name: 'auth-store',
        partialize: (state) => ({
          user: state.user,
        }),
      },
    ),
  ),
);

export default AuthStore;
