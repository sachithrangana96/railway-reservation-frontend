import httpClient,{API_BASE_URL} from '../../../utils/httpClient'
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
    'login/auth',
    async({requestData,navigate})=>{
        try{
          console.log(requestData, 'requestData')
          const response = await httpClient.post(`/auth/login`,requestData);
          console.log(response)
          navigate('/')
          return response.data;
        }catch(error){
            throw error;
        }
    }
);


export const signup = createAsyncThunk(
    'register/auth',
    async(requestData)=>{
        try {
            const response = await httpClient.post(`/auth/user`,requestData);
            return response.data;
        } catch (error) { 
            throw error
        }
    }
);

const authSlice = createSlice({
    name:'auth',
    initialState:{
        login:null,
        register:null,
        error: null,
        loading :null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
              .addCase(login.pending,(state)=>{
                state.loading = true;
                state.error = null;
              })
              .addCase(login.fulfilled,(state,action)=>{
                state.loading = null;
                state.login = action.payload;
              })
              .addCase(login.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message;
              })
              .addCase(signup.pending,(state)=>{
                state.loading = true;
                state.error = null;
              })
              .addCase(signup.fulfilled,(state,action)=>{
                state.loading = false;
                state.register = action.payload;
              })
              .addCase(signup.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message;
              })
           
    } 
});

export default authSlice.reducer;