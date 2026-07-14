import React from 'react'

function colorForRisk(level){
  if(level === 'low') return '#2ecc71'
  if(level === 'medium') return '#f1c40f'
  return '#e74c3c'
}

export default function RiskMeter({ probability=0, risk_level='low' }){
  const pct = Math.round((probability||0)*100)
  const color = colorForRisk(risk_level)
  return (
    <div className="risk-meter">
      <div className="risk-header">
        <strong>Risk:</strong>
        <span className="risk-level" style={{ color }}>{risk_level.toUpperCase()}</span>
        <span className="risk-pct">{pct}%</span>
      </div>

      <div className="risk-bar">
        <div className="risk-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  )
}
