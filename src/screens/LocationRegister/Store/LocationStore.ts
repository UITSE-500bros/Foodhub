import { create } from "zustand";


interface LocationStore {
    locations: string[];
    addLocation: (location: string) => void;
    removeLocation: (location: string) => void;
    locationCount: number;
}

const useLocationStore = create<LocationStore>((set) => ({
    locations: [],
    addLocation: (location) => set((state) => ({ locations: [...state.locations, location] })),
    removeLocation: (location) => set((state) => ({ locations: state.locations.filter(loc => loc !== location) })),
    get locationCount() {
        return this.locations.length;
    }
}));

export default useLocationStore;
