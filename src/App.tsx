import { Header } from './components/header'
import { Aluno } from './components/alunos'
import { Footer } from './components/footer'

export default function App(){
  return(
    <div>
      <Header title= "Learning from scratch to advanced"/>

      <Aluno name= "Maria Cristina" age={20} />

      <Aluno name= "Lucas Colognese" age={19} />

      <Aluno name= "ninoin pedonhento" age={5} />
      
      <Footer />
    </div>
  )
}

