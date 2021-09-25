import React from 'react'
import kgf from '../../assets/kgf.jpg'
import name from '../../assets/kgf-name.png'
import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './Featured.scss'

const Featured = ({ type }) => {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fanatasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}

      <img src={kgf} alt='' />
      <div className='info'>
        <img src={name} alt='' />
        <span className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi
          iure officia eveniet, consectetur eaque quis id esse voluptas nobis
          minus ut, reiciendis expedita temporibus a debitis optio neque quo.
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
