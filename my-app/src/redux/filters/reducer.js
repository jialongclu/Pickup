import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    ageFilter: 'any',
    skillLevelFilter: 'any',
    heightFilter: 'any'
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,
    reducers: {
        updateAgeFilter: (state, action) => {
            state.ageFilter = action.payload;
            console.log('updated age filter to value ' + action.payload);
        },
        updateSkillLevelFilter: (state, action) => {
            state.skillLevelFilter = action.payload;
        },
        updateHeightFilter: (state, action) => {
            state.heightFilter = action.payload;
        }
    }
});

export const { updateAgeFilter, updateSkillLevelFilter, updateHeightFilter } =
    filtersSlice.actions;
export default filtersSlice.reducer;
