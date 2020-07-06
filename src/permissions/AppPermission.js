import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import {Platform} from "react-native"

//----------------------------PLATFORMS-------------------------------------
/*const PLATFORM_LOCATION_PERMISSIONS = {
    ios: null,//PERMISSIONS.IOS.LOCATION_ALWAYS
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
}*/
const PLATFORM_PHOTO_PERMISSIONS = {
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,//PERMISSIONS.IOS.PHOTO_LIBRARY
    android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,// PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
}


//----------------------------TYPES-------------------------------------
const REQUEST_PERMISSION_TYPE = {
    //location: PLATFORM_LOCATION_PERMISSIONS,
    photo: PLATFORM_PHOTO_PERMISSIONS
}
const PERMISSION_TYPE = {
    //location: "location",
    photo: "photo"
}

class AppPermission {
    
    checkPermission = async (type): Promise<boolean> => {
        console.log("AppPermission checkPermission type: ", type)
        const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
        console.log("AppPermission checkPermission type: ", permissions)
        if(!permissions){
            return true
        }


        try{
            const result = await check(permissions)
            console.log("AppPermission checkPermission type: ", result)
            if( result === RESULTS.GRANTED) return true
            return this.requestPermission(permissions)
        }catch(error){
            console.log("AppPermission checkPermission error: ", error)
            return false
        }
    }

    
    requestPermission = async (permissions): Promise<boolean> => {
        console.log("AppPermission requestPermission permissions: ", permissions)


        try{
            const result = await request(permissions)
            console.log("AppPermission requestPermission result: ", result)
            return result === RESULTS.GRANTED
        }catch(error){
            console.log("AppPermission requestPermission error: ", error)
            return false
        }
    }

    requestMultiple = async (types): Promise<boolean> => {
        console.log("AppPermission requestPermission types: ", types)
        const results = []
        for ( const type of types) {
            const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
            if(permission){
                const result = await this.requestPermission(permission)
                results.push(result)
            }
        }
        for(const result of results){
            if(!result){
                return false
            }
        }
        return true
    }
}


const Permission = new AppPermission()
export {Permission, PERMISSION_TYPE}