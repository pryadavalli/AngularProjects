import { UserActions, UserActionTypes } from './user.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IfStmt } from '@angular/compiler';

export interface UserState{
    markUserName: boolean;
    isValidLogin:boolean;
}
const intitalState: UserState = {
    markUserName: false,
    isValidLogin: false
     
};
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getUserState = createSelector(
    getUserFeatureState,
    state => state.markUserName
)
export const getUserLoginState = createSelector(
    getUserFeatureState,
    state => state.isValidLogin
)

export function userreducer(state = intitalState,action : UserActions ):UserState{
    switch (action.type) {
        case UserActionTypes.ToggleMarkUserName:
            if(state != null){
            return {
                ...state,
                markUserName : action.payload
                };
            }
            else
            {
                return {...state};
            }
            case UserActionTypes.LoginSuccess:
                return {
                    ...state,
                    isValidLogin: action.payload
                    
                };
            case UserActionTypes.LoginFail:
                return {
                    ...state,
                    isValidLogin: action.payload
                };

            default: return state;
        }
}