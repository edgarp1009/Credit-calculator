import React, { useState } from 'react'

const Calculator = ({ setCredit, setDeadline, calculateCredit, credit, deadline, setIsValid }) => {
  const [error, setError] = useState("");

  const handleCalculate = (e) => {

    if (credit > 0 && deadline != 0){
      setError(false);
      calculateCredit();
    } else if (!deadline && credit <= 0){
      setError(true);
      setIsValid(false);
      setError('Fill the champs above');
    } else if (credit <= 0){
      setError(true);
      setIsValid(false);
      setError('Fill your credit amount champ');
    } else if (!deadline){
      setError(true);
      setIsValid(false);
      setError('Select your deadline');
    }
  };

  return (
    <section className='calculator'>
    <form action="">
      <input type="number" placeholder='1000$' onChange={e => {
        setCredit(Number(e.target.value));
        setIsValid(false);
      }} />
      <select name="credit-time" id="credit-time" onChange={e => {
        setDeadline(Number(e.target.value));
      }} >
        <option value="">Select a deadline</option>
        <option value="3">3 months</option>
        <option value="6">6 months</option>
        <option value="12">12 months</option>
        <option value="24">24 months</option>
      </select>
    </form>
      <input type="submit" value={"Calculate"} className='calculate-button' onClick={handleCalculate} />
      {error && <p className='errorText'>{error}</p>}
    </section>
  )
}

export default Calculator