import { useState, useEffect } from "react";

export default function useFetch(url: string) {
    const [text, setText] = useState<string>("");
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setText(data.text))
        .catch(() => console.log("error fetching data"))
    }, [url])
    return {text};
}