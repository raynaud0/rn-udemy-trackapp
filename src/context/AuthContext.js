//we call dispatch when we need to uptdate our state
import createDataContext from "./createDataContext"
import trackerApi from "../api/tracker"
import AsyncStorage from '@react-native-community/async-storage';
import * as RootNavigation from '../navigationRef/RootNavigation';

const authReducer = (state, action) => {
    switch(action.type){

        case "add_error": 
            return { ...state, errorMessage:action.payload}
        

        case "signup" : 
            return { errorMessage: "", token: action.payload}
        

        case "signin": 
            return { errorMessage: "", token: action.payload}
        

        case "signout":
            return { token: null, errorMessage:"" }
        

        case "clear_error_message": 
            return { ...state, errorMessage:""}
        

        default:
            return state
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem("token")
        dispatch({ type: "signout"})
        RootNavigation.navigate("SignupScreen")
    }
}

const tryLocalSignin = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem("token")

        if(token){
            dispatch({ type: "signin", payload: token})
            RootNavigation.navigate("HomeApp")
        } else {
            RootNavigation.navigate("SignupScreen")
        }
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch( { type: "clear_error_message" })
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerApi.post("/signup", {email, password} )
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type:"signup", payload: response.data.token})
            
            RootNavigation.navigate("SigninScreen");
        }
        catch(err){
            dispatch( { type: "add_error", payload: "Something went wrong with sign up"})
            console.log(err)
        }
    }
}


const signin = dispatch => async ({email, password}) => {
        try{
            const response = await trackerApi.post("/signin", {email, password})
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type: "signin", payload: response.data.token})

            RootNavigation.navigate("HomeApp")
        }
        catch(err){
            dispatch( { type: "add_error", payload: "Something went wrong with sign up"})
            console.log(err)
        }

    }



export const {Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    {token: null, errorMessage: "" }
)