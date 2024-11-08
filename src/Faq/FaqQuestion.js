import React, { useState } from 'react'

import { GoPlus } from "react-icons/go";
import { HiMiniMinus } from "react-icons/hi2";

const FaqQuestion = ({ faq }) => {
    const [showSelfFaq, setShowSelfFaq] = useState(false);
  return (
    <div className='faq_item'>
        <div className='faq_question' onClick={e => setShowSelfFaq(!showSelfFaq)}>
        <p>{ faq?.question }</p>
        <span className='icon'>{ showSelfFaq ? <HiMiniMinus /> : <GoPlus /> }</span>
        </div>
        <div className={`faq_answer ${showSelfFaq ? "showFaqItem": ""}`}>{ faq?.answer }</div>
    </div>
  )
}

export default FaqQuestion