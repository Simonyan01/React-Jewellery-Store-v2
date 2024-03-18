import { createSlice } from '@reduxjs/toolkit';

export const selectSignInData = state => state.signIn

const initialState = {
    email: '',
    password: '',
    errMsg: '',
    successMsg: '',
    loading: false,
    open: false,
    signInFormData: {
        userEmail: '',
        userPwd: '',
    }
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
        setIsLoading(state, action) {
            state.loading = action.payload
        },
        setIsOpen(state, action) {
            state.open = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
        setPassword(state, action) {
            state.password = action.payload
        },
        setSuccessMsg(state, action) {
            state.successMsg = action.payload
        },
    }
});

export const { setFormData, setPassword, setEmail, clearFormData, setErrMsg, setIsLoading, setIsOpen, setSuccessMsg } = signInSlice.actions;

export default signInSlice.reducer;