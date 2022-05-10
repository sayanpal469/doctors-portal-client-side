import React from 'react';

const InfoCard = ({img,cardTitle, bgcolor, cardPara}) => {
    return (
        <div  class={`card lg:card-side shadow-xl p-2 ${bgcolor}`}>
    <figure>
      <img className='lg:p-5' src={img} alt="Album"/>
    </figure>
  <div class="card-body text-white">
    <h2 class="card-title">{cardTitle}</h2>
    <p>{cardPara}</p>
  </div>
</div>
    );
};

export default InfoCard;