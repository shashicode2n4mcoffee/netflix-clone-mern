import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons'
import React from 'react'
import './List.scss'
import ListItem from '../ListItem/ListItem'
import { useRef, useState } from 'react'
const List = () => {
  const listRef = useRef()
  const [slideNumber, setSlideNumber] = useState(0)
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 60
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((prev) => prev - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }

    if (direction === 'right' && slideNumber < 16) {
      setSlideNumber((prev) => prev + 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className='list'>
      <span className='list-title'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='sidearrow left'
          onClick={() => handleClick('left')}
        />
        <div className='container' ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
          <ListItem index={12} />
          <ListItem index={13} />
          <ListItem index={14} />
          <ListItem index={15} />
          <ListItem index={16} />
          <ListItem index={17} />
          <ListItem index={18} />
          <ListItem index={19} />
          <ListItem index={20} />
        </div>
        <ArrowForwardIosOutlined
          className='sidearrow right'
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default List
