import * as React from 'react'
import style from './style.styl'
import img from '../../assets/images/img.jpg'


function MainPage(): React.ReactElement {
  return (
    <div className={ style.main }>
      <h1>React SSR Starter Kit</h1>
      <img src={ img } alt="" />
    </div>
  )
}

export default MainPage
