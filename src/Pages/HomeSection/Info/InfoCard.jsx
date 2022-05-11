import React from 'react';

const InfoCard = ({img,cardTitle, bgcolor, cardPara}) => {
    return (
        <div  className={`card lg:card-side shadow-xl p-2 ${bgcolor}`}>
    <figure>
      <img className='lg:p-5' src={img} alt="Album"/>
    </figure>
  <div className="card-body text-white">
    <h2 className="card-title">{cardTitle}</h2>
    <p>{cardPara}</p>
  </div>
</div>
    );
};

export default InfoCard;