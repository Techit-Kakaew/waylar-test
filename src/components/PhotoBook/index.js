import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Header from './Header'
import PhotoList from './PhotoList'
import { getPhoto } from 'redux/actions/photoAction'

const PhotoBook = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPhoto())
    }, [])
    
    return (
        <div className={`container`}>
            <Header />
            <PhotoList />
        </div>
    )
}

export default PhotoBook