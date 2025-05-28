import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  currentUser: string | null;
  setCurrentUser: (accessToken: string) => void;
  removeCurrentUser: () => void;
}

// Tạo store với persist middleware
const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      currentUser: null,
      setCurrentUser: (accessToken: string) =>
        set({ currentUser: accessToken }),
      removeCurrentUser: () => set({ currentUser: null }),
    }),
    {
      name: "tokenAccess", // key trong localStorage
    }
  )
);

export default useAuthStore;
