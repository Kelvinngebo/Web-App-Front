import React from 'react'
import ExplanationCard from './ExplanationCard'
import RiskMeter from './RiskMeter'
import PhoneCopy from './PhoneCopy'

export default function ResultCard({ result }){
  if(result.error){
    return <div className="result error">Error: {result.error}</div>
  }

  const features = result.features || {}
  const phone = features.phone
  const price = features.price

  return (
    <div className="result">
      <h2>Prediction</h2>
      <RiskMeter probability={result.probability} risk_level={result.risk_level} />

      <div className="prediction-row">
        <div><strong>Label:</strong> {result.label}</div>
        <div><strong>Probability:</strong> {Math.round((result.probability||0)*100)}%</div>
      </div>

      <div className="features">
        <h3>Detected features</h3>
        <ul>
          <li><strong>Phone:</strong> {phone ? <PhoneCopy phone={phone} /> : 'N/A'}</li>
          <li><strong>Price:</strong> {price != null ? `$${price}` : 'N/A'}</li>
          <li><strong>Word count:</strong> {features.word_count ?? 'N/A'}</li>
        </ul>
      </div>

      <ExplanationCard explanations={result.explanations} />

    </div>
  )
}
