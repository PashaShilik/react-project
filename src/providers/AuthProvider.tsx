import { CommonLoader } from "@/components/Common/CommonLoader/CommonLoader";
import { LOCAL_STORAGE_KEYS } from "@/constants/LocalStorageKeys/LocalStorageKeys";
import { setAuthInfo, setIsAuth } from "@/redux/reducers/userReducer/userReducer";
import { useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";

export const AuthProvider = ({ children }: any) => {
    const isAuth = localStorage.getItem(LOCAL_STORAGE_KEYS.AuthMe);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        if(isAuth){
            dispatch(setIsAuth({isAuth:true}))
            dispatch(setAuthInfo(JSON.parse(isAuth)))
        }   
        setIsLoading(false)
    }, []);

    return isLoading ? <CommonLoader/> : children;
};
