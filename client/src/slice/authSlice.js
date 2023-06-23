import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
  CONSTANT VARIABLES
*/
const TOKEN = 'token';

/*
  THUNKS
*/
export const me = createAsyncThunk('auth/me', async () => {
    const token = window.localStorage.getItem(TOKEN);
    try {
        if (token) {
            const res = await axios.get('/auth/me', {
                headers: {
                    authorization: token,
                },
            });
            return res.data;
        } else {
            return {};
        }
    } catch (err) {
        if (err.response.data) {
            return console.error(err.response.data);
        } else {
            return 'There was an issue with your request.';
        }
    }
});

export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async ({ email, password }, thunkAPI) => {
        try {
            const res = await axios.post(`/auth/login`, {
                email,
                password,
            });
            window.localStorage.setItem(TOKEN, res.data.token);
            thunkAPI.dispatch(me());
        } catch (err) {
            if (err.response.data) {
                return thunkAPI.rejectWithValue(err.response.data);
            } else {
                return 'There was an issue with your request.';
            }
        }
    }
);

export const newUser = createAsyncThunk('auth/signup', async ({name, password, email}) => {
    try {
        const {data} = await axios.post('/auth/signup', {name,password,email})
        return data
    } catch(error) {
        throw new Error(error.message)
    }
})
/*
  SLICE
*/
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        me: {},
        error: null,
    },
    reducers: {
        logout(state, action) {
            window.localStorage.clear()
            state.me = {};
            state.error = null;
            window.location.reload()
        },
    },
    extraReducers: (builder) => {
        builder.addCase(me.fulfilled, (state, action) => {
            state.me = action.payload;
        });
        builder.addCase(me.rejected, (state, action) => {
            state.error = action.error;
        });
        builder.addCase(authenticate.rejected, (state, action) => {
            state.error = action.payload;
        });
    },
});

/*
  ACTIONS
*/
export const { logout } = authSlice.actions;

/*
  REDUCER
*/
export default authSlice.reducer;
