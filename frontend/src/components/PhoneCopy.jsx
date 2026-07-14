import React from 'react'

export default function PhoneCopy({ phone }){
  if(!phone) return null
  async function copy(){
    try{
      await navigator.clipboard.writeText(phone)
      alert('Phone number copied to clipboard')
    }catch(e){
      alert('Unable to copy phone number')
    }
  }

  return (
    <div className="phone-copy">
      <span className="phone">{phone}</span>
      <button onClick={copy}>Copy</button>
    </div>
  )
}
