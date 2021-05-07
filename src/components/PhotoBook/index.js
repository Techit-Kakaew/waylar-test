/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import PhotoList from "./PhotoList"
import { getPhoto, getAlbum, nextAlbum } from "redux/actions/photoAction"
import { getUser } from 'redux/actions/userAction'

import styles from 'styles/PhotoBook/PhotoBook.module.scss'

const PhotoBook = () => {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')
  const listScroll = useRef(null)
  const albumFiltered = useSelector((state) => state.photoReducer.albumFiltered)
  useEffect(() => {
    dispatch(getPhoto())
    dispatch(getAlbum())
    dispatch(getUser())
  }, [])

  const handleScroll = () => {
    const scrollTop = Math.ceil(listScroll.current.scrollTop)
    const offsetHeight = listScroll.current.offsetHeight
    const scrollHeight = listScroll.current.scrollHeight
    if(scrollHeight - offsetHeight === scrollTop && !searchText && !albumFiltered) {
      dispatch(nextAlbum())
    }
  }

  return (
    <div ref={listScroll}
        onScroll={handleScroll} 
        className={`${styles.photoBook} container`}>
      <Header callbackSearchPhoto={(searchText) => setSearchText(searchText)} />
      <PhotoList searchText={searchText} />
    </div>
  )
}

export default PhotoBook
