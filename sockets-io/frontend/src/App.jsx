import { useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

let socket;

function App() {

  useEffect(() => {
    socket = io("http://localhost:4000");

    socket.on("connect", () => {
      console.log("Ansluten till servern");
    })

    socket.on("message", (data) => {
      console.log(data);
    })

    socket.on("new_client", (data) => {
      console.log(data);
    })

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    })

    return () => socket.off();
  }, []);

  function handleMessage() {
    socket.emit("message", JSON.stringify({ message: "Hello Server!" }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleMessage}>Skicka meddelande</button>
      </header>
    </div>
  );
}

export default App;
