import { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const SingleQuestion = ({ id, info, title, activeId, toggleQuestion }) => {
  const isActive = id === activeId;

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button onClick={() => toggleQuestion(id)} className='question-btn'>
          {isActive ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
