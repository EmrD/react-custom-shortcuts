import React, { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Ctrl + K ile input'a odaklan
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        inputRef.current.focus();
      }

      // Eğer input odaklanmışsa ve Escape tuşuna basılırsa, odaktan çık
      if (document.activeElement === inputRef.current && event.key === "Escape") {
        event.preventDefault();
        inputRef.current.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup fonksiyonu ile event listener'ı kaldır
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Keyboard Shortcut Example</h1>
      <input ref={inputRef} type="text" placeholder="Focus with Ctrl+K, Escape to blur" />
    </div>
  );
}

export default App;
