import React from 'react'

export default function ExplanationCard({ explanations = [] }){
  if(!explanations || explanations.length === 0) return null
  return (
    <div className="explanations">
      <h3>Why this prediction?</h3>
      <ul>
        {explanations.map((e,i)=>(<li key={i}>{e}</li>))}
      </ul>
    </div>
  )
}
