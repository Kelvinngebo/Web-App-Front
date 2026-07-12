import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000'

export async function analyzeAd({ ad_text, title='' }){
  const resp = await axios.post(`${API_BASE}/api/predict`, { ad_text, title })
  return resp.data
}
