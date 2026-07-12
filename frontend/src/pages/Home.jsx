import React, {useState} from 'react'
import AdvertisementInput from '../components/AdvertisementInput'
import ResultCard from '../components/ResultCard'
import LoadingAnimation from '../components/LoadingAnimation'
import { analyzeAd } from '../services/api'

export default function Home(){
  const [adText, setAdText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  async function handleAnalyze(){
    if(!adText || adText.trim().length === 0) return alert('Please paste an advertisement first')
    setLoading(true)
    setResult(null)
    try{
      const resp = await analyzeAd({ ad_text: adText })
      setResult(resp)
    }catch(err){
      setResult({ error: err.message || 'Request failed' })
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Automated Fraudulent Advertisement Detection</h1>
      </header>

      <main>
        <AdvertisementInput value={adText} onChange={setAdText} onAnalyze={handleAnalyze} />

        {loading && <LoadingAnimation />}
        {result && <ResultCard result={result} />}
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Kelvin Ngebo — Fraud Ad Detector</p>
      </footer>
    </div>
  )
}
