import React from 'react'

export default function AdvertisementInput({ value, onChange, onAnalyze }){
  return (
    <div className="ad-input">
      <label>Paste Advertisement</label>
      <textarea value={value} onChange={e => onChange(e.target.value)} rows={10} />
      <div className="actions">
        <button onClick={onAnalyze}>Analyze</button>
      </div>
    </div>
  )
}
