import {applyMiddleware, combineReducers, createStore} from 'redux';
import appReducer from './reducers/app-reducer';
import thunkMiddleWare from 'redux-thunk';

const rootReducer = combineReducers({
    app: appReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
// export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
// export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>