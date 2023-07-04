import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import back from '../images/back-icon.png'
export default function DetailCard({ img, heading }) {
    const [benefitsBoolean, setBenefitsBoolean] = useState(true);
    const [nutrientsBoolean, setNutrientsBoolean] = useState(false);
    // let benefitsActive =  
    // let nutrientsActive =  
    

    return (<>
        <div className='detail-page'>
            <div className={`img-sec ${heading}`}>
                <Link to={'/app'}><img src={back} alt='img'/></Link>
            </div>
            <div className='text-sec'>
                <div className='detail-link' style={{borderBottom: benefitsBoolean? '2px solid gold' :''}}>
                    <Link to={`/${heading}`}  onClick={() => { setBenefitsBoolean(!benefitsBoolean); setNutrientsBoolean(!nutrientsBoolean) }}>Detail</Link>
                </div>
                <div className='detail-link' style={{borderBottom: nutrientsBoolean?'2px solid gold':''}}>
                    <Link to={`/${heading}/nutrients`}   onClick={() => { setBenefitsBoolean(!benefitsBoolean); setNutrientsBoolean(!nutrientsBoolean) }}>Nutrients</Link>
                </div>
            </div>

            <Outlet />
        </div>
    </>
    )
}
