//we call dispatch when we need to uptdate our state
import createDataContext from "./createDataContext"
import trackerApi from "../api/tracker"
import AsyncStorage from '@react-native-community/async-storage';
import * as RootNavigation from '../navigationRef/RootNavigation';

const authReducer = (state, action) => {
    switch(action.type){

        case "add_error": {
            return { ...state, errorMessage:action.payload}
        }

        case "signup" : {
            return { errorMessage: "", token: action.payload}
        }

        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerApi.post("/signup", {email, password} )
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type: signup, payload: response.data.token})

            RootNavigation.navigate("TrackListScreen");
        }
        catch(err){
            dispatch( { type: "add_error", payload: "Something went wrong with sign up"})
        }
    }
}


const signin = (dispatch) => {
    return ({email, password}) => {

    }
}


const signout = (dispatch) => {
    return () => {

    }
}

export const {Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup},
    {token: null, errorMessage: "" }
)