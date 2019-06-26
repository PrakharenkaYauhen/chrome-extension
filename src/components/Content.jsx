// Component Content

import React from 'react';
// import logo from '../images/Penguin_2.ico';
import plus from '../images/plus.png';
import ContentLink from './ContentLink'

function Content({
  linksArray,
  onClickOpenModal,
}) {
  console.log(linksArray)
  let content = linksArray.map(item => (
    <ContentLink key={item.text} image={item.image} text={item.text} link={item.link} />
  ))
  
  return (
    <div className="content">
      <div>
        {content}
        <ContentLink image={plus} onClickOpenModal={onClickOpenModal}/>
      </div>
    </div>
  )
}

export default Content;
