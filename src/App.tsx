import { useState } from "react";
export default function App(){
  const[input, setInput] = useState("")
  const[idade, setIdade] = useState("");
  const[aluno, setAluno] = useState("");

  function MostrarAluno(){
    console.log(idade);
    setAluno(input);
  }

  return(
    <div>
     <h1>Getting to know useState</h1>

     <input 
     placeholder="Enter your name"
     value={input}
     onChange={(e) => setInput(e.target.value)}
     />
     
    <br /> <br />
    <input 
      placeholder="Enter your age"
      value={idade}
      onChange={(e) => setIdade(e.target.value)}
    />

     <br /> <br />

     <button onClick={MostrarAluno}>Show student</button>
      
      <hr />

      <h3>Welcome: {aluno}</h3>


    </div>
  )
}

