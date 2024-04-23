import React from 'react';

const SportsWear_Web = (props) => {
    return (
    <div>
    <div className="Sportswear-Item">
        <div className='Sportswear-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='Sportswear-info'>
            <div className='Sportswear-sale'>
                <img src={props.sale} alt=''/>
            </div>
            <div className="Price-Discribe">
                <div className='Sportswear-discribe'>
                 <p>{props.discribe}</p>
                </div>
                <div className='Sportswear-prcice'>
                 <p>{props.prcice}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default SportsWear_Web;