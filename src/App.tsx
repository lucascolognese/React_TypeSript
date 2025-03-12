import { useState } from "react";

interface userProps{
  name: string;
  position: string;
}

export default function App(){
  const [user, setUser] = useState<userProps>({
    name: "Friend",
    position: ""
  })

  function handleLogin(){
    setUser({
      name: "Colognese",
      position: "Developer"
    })
  }

  function handleLogout(){
    setUser({
      name: "",
      position: ""
    })
  }

  return(
    <div>
      <h1>Getting to know useState</h1>
      <button onClick={handleLogin}>
        Run 
      </button>
      <button onClick={handleLogout}>
        Logout
      </button>
      
      <h4>Hello {user.name}</h4>
      <strong>{user.position}</strong>
    </div>
  )
}

