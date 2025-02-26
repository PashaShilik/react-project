import { CommonLoader } from "../components/Common/CommonLoader/CommonLoader";
import { setIsAuth } from "../redux/reducers/userReducer/userReducer";
import { useAppDispatch } from "../redux/store";
import { useEffect, useState } from "react";

export const AuthProvider = ({ children }: any) => {
    const isAuth = localStorage.getItem('AuthMe');
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {
        setIsLoading(true)
        if(isAuth){
            dispatch(setIsAuth({isAuth:false}))
        }   
        setIsLoading(false)
    }, []);

    return isLoading ? <CommonLoader/> : children;
};
