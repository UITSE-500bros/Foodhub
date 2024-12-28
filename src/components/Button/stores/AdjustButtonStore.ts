import { create } from 'zustand';

const useAdjust = create((set) => ({
  count: 0,
  increment: () => set((state:any) => ({ count: state.count + 1 })),
  decrement: () => set((state:any) => ({ count: state.count - 1 })),
}));

export default useAdjust;
