import { useState, useRef, useEffect } from 'react';
import { GREETING_TEXT, KEY_DOWN_EVENT } from "./constants";

const useCodeEditor = () => {

  const documentRef = useRef();

  const [value, setValue] = useState(GREETING_TEXT);

  useEffect(() => {
    documentRef.current.innerHTML = "hello world";
  }, []);

  useEffect(() => {

    const currentDocumentRef = documentRef.current;
    function handleKeyDown(e) {
      console.log("Key Pressed");
    }

    currentDocumentRef.addEventListener(KEY_DOWN_EVENT, handleKeyDown);

    return () => currentDocumentRef.removeEventListener(KEY_DOWN_EVENT, handleKeyDown)
  }, [])
  

  return [value, documentRef];
}

export default useCodeEditor
