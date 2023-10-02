import { useState, useEffect } from "react";

const useIsOnline = () =>{
const [status, setStatus] = useState(true);

useEffect (()=>{
    handleOnline = () => {
        setStatus(true);
    };
    handleOffline = () => {
        setStatus(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline",handleOffline);
    };
}, []);

return status;

};

export default useIsOnline;