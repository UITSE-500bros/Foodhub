import { create } from "zustand";
import axiosInstance from "../../../service/axiosInstance";

export interface Location {
  address_name: string;
  address: string;
}
interface LocationStore {
  locations: Location[];
  addLocation: (location: Location) => Promise<void>;
  removeLocation: (location: Location) => Promise<void>;
  locationCount: number;
  fetchLocation: () => Promise<void>;
}

const useLocationStore = create<LocationStore>((set, get) => ({
  locations: [],
  fetchLocation: async () => {
    try {
      const response = await axiosInstance.get("/user/address");
      console.log("response", response.data);

      set({ locations: response.data });
    } catch (e) {}
  },
  addLocation: async (location) => {
    try {
      const response = await axiosInstance.post("/user/address", location);
      console.log("response", response.data);
      set((state) => ({ locations: [...state.locations, response.data] }));
      await get().fetchLocation();
    } catch (e) {
      console.log("error", e);
    }
  },
  removeLocation: async (location) => {
    try {
      const response = await axiosInstance.delete(`/user/address`, {
        data: location,
      });
      console.log("response", response.data);
      set((state) => ({
        locations: state.locations.filter(
          (item) => item.address !== location.address
        ),
      }));
    } catch (e) {
      console.log("error", e);
    }
  },

  get locationCount() {
    return this.locations.length;
  },
}));

export default useLocationStore;
