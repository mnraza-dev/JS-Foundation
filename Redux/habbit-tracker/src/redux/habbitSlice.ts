import { createSlice } from "@reduxjs/toolkit";

export interface Habbit {
    id: string,
    name: string,
    frequency: "Daily" | "Weekly",
    completedDates: string[],
    createdAt: string
}
interface HabbitState {
    habbits: Habbit[]
}

const initialState: HabbitState = {
    habbits: []
}

const habbitSlice = createSlice({
    name: "habbits",
    initialState,
    reducers: {
        addHabbit() {

        }
    }

})
export const { addHabbit } = habbitSlice.actions
export default habbitSlice.reducer