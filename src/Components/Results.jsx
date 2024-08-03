import React from 'react'

const Results = ({ credit, deadline, monthlyPayment, isValid }) => {
  return (
    <section className={"results"}>
      <h2>Summary:</h2>
      <p>Amount of credit: {`${credit}$`}</p>
      <p>the deadline is: {`${deadline} months`}</p>
      <p>Your monthly payment is: {`${monthlyPayment}$`}</p>
      <p>Total amount your paying: {`${monthlyPayment*deadline}$`}</p>
    </section>
  )
}

export default Results