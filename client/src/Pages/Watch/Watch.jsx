import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import kgfMovie from '../../assets/kgf-movie.mkv'
import './Watch.scss'

const Watch = () => {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        <span> Home</span>
      </div>
      <video className='video' autoPlay progress controls src={kgfMovie} />
    </div>
  )
}

export default Watch
