import { useState, useRef, useEffect } from 'react';
import { GREETING_TEXT, KEY_DOWN_EVENT } from "./constants";

const useCodeEditor = () => {

  const documentRef = useRef();

  const [value, setValue] = useState(GREETING_TEXT);

  useEffect(() => {

    const currentDocumentRef = documentRef.current;
    function handleKeyDown(event) {
      console.log("Key Pressed", event);
    }

    currentDocumentRef.addEventListener(KEY_DOWN_EVENT, handleKeyDown);

    return () => currentDocumentRef.removeEventListener(KEY_DOWN_EVENT, handleKeyDown)
  }, [])
  

  return [value, documentRef];
}

export default useCodeEditor
