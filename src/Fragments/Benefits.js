import React from 'react'

export default function Benefits({ description,heading,list }) {
    return (
        <div className='benefits'>
            <h1>{heading}</h1>
            <p>{description}</p>
            <h2>Benefits : </h2>
            <ul>
            {list.map((item)=> <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
