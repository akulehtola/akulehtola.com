import { useState, useEffect } from "react";

export default function useFetch(url: string, errText: React.JSX.Element) {
    const [text, setText] = useState<string>("");
    const [err, setErr] = useState<React.JSX.Element>();
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setText(data.text))
        .catch(() => setErr(errText))
    }, [url, errText])
    return {text, err};
}