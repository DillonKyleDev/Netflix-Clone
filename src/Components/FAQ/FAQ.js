import React from 'react';
import './faq.css';
import { AiOutlinePlus } from 'react-icons/ai'

function FAQ() {
  return <div className='faq-div'>
    <ul>
      <li>
        <button className='question'>
          What is Netflix?
          <AiOutlinePlus className='expand'/>
        </button>
      </li>
      <li>
        <button className='question'>
          How much does Netflix cost?
          <AiOutlinePlus className='expand'/>
        </button>
      </li>
      <li>
        <button className='question'>
          Where can I watch?
          <AiOutlinePlus className='expand'/>
        </button>
      </li>
      <li>
        <button className='question'>
          How do I cancel?
          <AiOutlinePlus className='expand'/>
        </button>
      </li>
      <li>
        <button className='question'>
          What can I watch on Netflix?
          <AiOutlinePlus className='expand'/>
        </button>
      </li>
      <li>
        <button className='question'>
          Is Netflix good for kids?
          <AiOutlinePlus className='expand'/>
        </button>
      </li>
    </ul>
  </div>;
}

export default FAQ;
