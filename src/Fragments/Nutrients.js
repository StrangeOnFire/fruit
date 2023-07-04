import React from 'react'

export default function Nutrients({nutritionDescription,list}) {
  return (
    <div className='nutrients'>
    <p>{nutritionDescription}</p>
    <ul>
    {Object.entries(list).map(([key,value])=> <li key={value}><span>{key}</span> : {value}</li>)}
    </ul>
</div>
  )
}
