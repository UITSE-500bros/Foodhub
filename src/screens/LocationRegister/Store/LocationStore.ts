import { create } from "zustand";
import axiosInstance from "../../../service/axiosInstance";



type Location ={
    
}
interface LocationStore {
    locations: string[];
    addLocation: (location: string) => void;
    removeLocation: (location: string) => void;
    locationCount: number;
    fetchLocation: ()=>Promise<void>;
}

const useLocationStore = create<LocationStore>((set) => ({
    locations: [],
    fetchLocation: async () => {
        try{
            const response = await axiosInstance.get('/user/address');
            set({locations: response.data})
        }
        catch(e){
            console.error('Error fetching locations', e)
        }
            
    },
    addLocation: (location) => set((state) => ({ locations: [...state.locations, location] })),
    removeLocation: (location) => set((state) => ({ locations: state.locations.filter(loc => loc !== location) })),
    get locationCount() {
        return this.locations.length;
    }
}));

export default useLocationStore;
