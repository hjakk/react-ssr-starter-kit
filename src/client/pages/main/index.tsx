import * as React from 'react'
import style from './style.styl'
import img from '../../assets/images/img.jpg'


function Main(): React.ReactElement {
  return (
    <div className={ style.main }>
      <h1>Webpack React Layout</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, iure culpa rerum architecto unde dolore vitae obcaecati exercitationem in nihil dignissimos omnis excepturi, libero voluptatibus ab expedita vel assumenda temporibus!
      </p>
      <img src={ img } alt="" />
    </div>
  )
}

export default Main
