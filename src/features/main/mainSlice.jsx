import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from 'api/axios';

export const selectData = state => state.main

// GET METHOD

export const getUserPosts = createAsyncThunk(
    "userPosts/getUserPosts",
    async (_, thunkAPI) => {
        try {
            const res = await API.get("/images", {
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            return res?.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message || "Failed to get user posts")
        }
    }
)

// POST METHOD

export const postUserData = createAsyncThunk(
    "userData/postUserData",
    async (req, thunkAPI) => {
        try {
            const res = await API.post("/images", req, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            return res?.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message || "Failed to post user data")
        }
    }
)

// UPDATE METHOD

export const updateUserData = createAsyncThunk(
    "userData/updateUserData",
    async (newData, thunkAPI) => {
        const { image } = newData;
        try {
            const res = await API.put(`/images/${image.id}`, image, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            return res?.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message || "Failed to update user data")
        }
    }
)

// DELETE METHOD

export const deleteUserData = createAsyncThunk(
    "userData/deleteUserData",
    async (id, thunkAPI) => {
        try {
            const res = await API.delete(`/images/${id}`)
            return res?.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message || "Failed to delete user data")
        }
    }
)

const initialState = {
    anchorEl: null,
    open: false,
    error: null,
    loading: false,
    images: []
}

const mainSlice = createSlice({
    name: 'auth/main_section',
    initialState,
    reducers: {
        setIsLoading(state, action) {
            state.loading = action.payload
        },
        setAnchorEl(state, action) {
            state.anchorEl = action.payload
        },
        setIsOpen(state, action) {
            state.open = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // GET
            .addCase(getUserPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(getUserPosts.fulfilled, (state, action) => {
                state.images = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getUserPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // UPDATE
            .addCase(updateUserData.pending, (state) => {
                state.loading = true
            })
            .addCase(updateUserData.fulfilled, (state, action) => {
                state.images = state.images.map(item => item.id !== action.payload.id ? item : action.payload);
                state.loading = false;
                state.error = null
            })
            .addCase(updateUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // DELETE
            .addCase(deleteUserData.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteUserData.fulfilled, (state, action) => {
                state.images = state.images.filter(item => item.id !== action.payload.id);
                state.loading = false;
                state.error = null
            })
            .addCase(deleteUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export const { setAnchorEl, setIsLoading, setIsOpen } = mainSlice.actions;

export default mainSlice.reducer;