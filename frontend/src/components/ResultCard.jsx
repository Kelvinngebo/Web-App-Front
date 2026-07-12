import React from 'react'

export default function ResultCard({ result }){
  if(result.error){
    return <div className="result error">Error: {result.error}</div>
  }

  return (
    <div className="result">
      <h2>Prediction</h2>
      <p><strong>Label:</strong> {result.label}</p>
      <p><strong>Probability:</strong> {Math.round((result.probability||0)*100)}%</p>
      <p><strong>Risk Level:</strong> {result.risk_level}</p>
      <h3>Explanations</h3>
      <ul>
        {(result.explanations || []).map((r,i)=>(<li key={i}>{r}</li>))}
      </ul>
    </div>
  )
}
