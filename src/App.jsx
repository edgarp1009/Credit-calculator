import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Calculator from './Components/Calculator'
import Results from './Components/Results'

function App() {
  const [credit, setCredit] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const calculateCredit = () => {
    setMonthlyPayment(parseInt(Math.ceil((credit+credit*0.05*deadline)/deadline)));
    setIsValid(true);
  };

  return (
    <>
      < Header />

      <section className='main-section'>
        < Calculator 
        setCredit={setCredit} 
        setDeadline={setDeadline} 
        calculateCredit={calculateCredit}
        setIsValid={setIsValid}
        credit={credit}
        deadline={deadline}
        isValid={isValid}
        />
        {isValid && < Results  
        credit={credit}
        deadline={deadline}
        monthlyPayment={monthlyPayment}
        />}
      </section>
    </>
  )
}

export default App
