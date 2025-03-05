import {RootState} from "@/redux/store";

export const searchSelector = (state: RootState)=> {
    return state.searchReducer;
}