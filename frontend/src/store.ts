import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

store.subscribe(() => {
    const token = store.getState().auth.token;

    if (token) {
        localStorage.setItem('UserToken', token);
    }
    else {
        localStorage.removeItem('UserToken');
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;