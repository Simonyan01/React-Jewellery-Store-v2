import { createSlice } from '@reduxjs/toolkit';

export const selectSignUpData = state => state.signUp

const initialState = {
    errMsg: '',
    loading: false,
    open: false,
    name: null,
    email: null,
    token: null,
    id: null,
    signUpFormData: {
        fullName: '',
        userEmail: '',
        userPwd: '',
        repeatPwd: '',
    },
}

const signUpSlice = createSlice({
    name: 'auth/sign_up',
    initialState,
    reducers: {
        saveCreatedUser(state, action) {
            state.name = action.payload.fullName;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
        setFormData: (state, action) => {
            const { field, value } = action.payload;
            state.signUpFormData = { ...state.signUpFormData, [field]: value };
        },
        clearFormData(state) {
            state.signUpFormData = initialState.signUpFormData;
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

export const { saveCreatedUser, setFormData, clearFormData, setOpen, removeUser, setErrMsg, setLoading } = signUpSlice.actions;

export default signUpSlice.reducer;