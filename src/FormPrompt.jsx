// FormPrompt.js
import { useEffect } from "react";

export default function FormPrompt() {
    useEffect(() => {
        const onBeforeUnload = (e) => {
            console.log("else")
            e.preventDefault();
            e.returnValue = "";
            alert("hey!")
        };
        window.addEventListener("beforeunload", onBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", onBeforeUnload);
        };
    }, []);
};
