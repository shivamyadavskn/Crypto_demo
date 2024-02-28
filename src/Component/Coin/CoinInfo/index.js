import React, { useState } from 'react'
import "./styles.css"

function CoinInfo({name,desc}) {
    const [read , setRead]=useState(false);

    const smallDesc =
    desc.length > 400
      ? desc.slice(0, 400) +
        "<p style='color:var(--text-grey); font-weight: 500; ; cursor:pointer;'>Read More...</p>"
      : desc;
  const fullDesc =
    desc.length > 400
      ? desc + "<p style='color:var(--text-grey); font-weight: 500 ;cursor:pointer;'>Read Less...</p>"
      : desc;

  return (
    <div className='bg-[var(--grey)] text-[var(--black)] rounded-xl p-4 text-justify'>
        <h1 className='font-bold text-2xl uppercase py-4'>{name}</h1>
        {/* <p dangerouslySetInnerHTML={{__html:desc}} className='text-lg'/> */}
        <p
        onClick={() => {
          desc.length > 400 && setRead(!read);
        }}
        className="coin-desc-para"
        dangerouslySetInnerHTML={{ __html: read ? fullDesc : smallDesc }}
      />
    </div>
  )
}

export default CoinInfo
