interface AlunoProps{
    name: string;
    age: number;
  }
  
  export function Aluno({ name, age }: AlunoProps){
    return(
      <div>
        <h1>student: {name}</h1>
        <h3>age: {age}</h3>
      </div>
    )
  }