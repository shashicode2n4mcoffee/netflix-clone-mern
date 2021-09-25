import React from 'react'
import './ListItem.scss'
import { useState } from 'react'
import yash from '../../assets/yash.png'
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons'

import trailer from '../../assets/kgf-trailer.mkv'

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className='list-item'
      style={{ left: isHovered && index * 225 - 50 + index * 10 }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          <video autoPlay muted src={trailer} />
          <div className='info'>
            <div className='icons'>
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownAltOutlined className='icon' />
            </div>
            <div className='time'>
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>1996</span>
            </div>
            <div className='desc'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              quod a voluptates culpa.
            </div>
            <div className='genre'>Action</div>
          </div>
        </>
      ) : (
        <img src={yash} alt='' />
      )}
    </div>
  )
}

export default ListItem
