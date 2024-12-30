import { create } from "zustand";

type SearchState = {
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
    };

export const useSearchStore= create<SearchState>((set) => ({
    searchQuery: "",
    setSearchQuery: (searchQuery: string) => set({ searchQuery }),
    }));