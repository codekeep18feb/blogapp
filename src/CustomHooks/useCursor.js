import React, { useRef } from 'react'

export default function useCursor() {
    
    const textareaRef = useRef(); 
    const cursorPosition = 0;
  
    return <textarea
      ref={textareaRef}
      onBlur={() => textareaRef.current.setSelectionRange(cursorPosition, cursorPosition)}
    />
}
