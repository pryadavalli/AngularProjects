
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginActions, LoginActionTypes } from './login.actions';


export interface State extends fromRoot.State{
    login: LoginState
}
export interface LoginState{
    username: string;
    password: string;
}

const intitalState : LoginState = {
    username: '',
    password: ''
};

const getUserFeatureState = createFeatureSelector<LoginState>('login');

export const getUser = createSelector(
    getUserFeatureState,
    state=>state
)

export function loginreducer(state = intitalState,action:LoginActions):LoginState
{
    console.log( JSON.stringify(state));
    
switch(action.type)
{
    case LoginActionTypes.LoginAction:
        return{
           ...action.payload
        };
    
    default: return state;
}
}