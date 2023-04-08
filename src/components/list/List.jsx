import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React from 'react'
import ListItem from '../listItem/ListItem'

import './List.scss'

const List = () => {
  return (
    <div className="list">List
        <span className="lisTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="sliderArrow"/>
            <div className="container">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIosOutlined className="sliderArrow" />
        </div>
    </div>
  )
}

export default List