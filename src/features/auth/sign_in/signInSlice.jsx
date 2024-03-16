import { createSlice } from '@reduxjs/toolkit';

export const selectSignInData = state => state.signIn

const initialState = {
    errMsg: '',
    loading: false,
    open: false,
    signInFormData: {
        userEmail: '',
        userPwd: '',
    },
}

const signInSlice = createSlice({
    name: 'auth/sign_in',
    initialState,
    reducers: {
        setFormData: (state, action) => {
            const { field, value } = action.payload;
            state.signInFormData = { ...state.signInFormData, [field]: value };
        },
        clearFormData(state) {
            state.signInFormData = initialState.signInFormData;
        },
        setErrMsg(state, action) {
            state.errMsg = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setOpen(state, action) {
            state.open = action.payload
        }
    }
});

export const { setFormData, clearFormData, setErrMsg, setLoading, setOpen } = signInSlice.actions;

export default signInSlice.reducer;