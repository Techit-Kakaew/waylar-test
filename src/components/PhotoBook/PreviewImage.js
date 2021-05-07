/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from 'styles/PhotoBook/PreviewImage.module.scss'

const PreviewImage = ({photo, closeEvt}) => {
  const users = useSelector((state) => state.userReducer.users)
  const album  = useSelector((state) => state.photoReducer.album)
  const [currentUser, setCurrentUser] = useState(null)
  const [currentAlbum, setCurrentAlbum] = useState(null)
  
  useEffect(() => {
    const findCurrentAlbum = album.data.find(al => al.id === photo.id)
    const findCurrentUser = users.data.find(user => user.id === findCurrentAlbum.userId)
    setCurrentAlbum(findCurrentAlbum)
    setCurrentUser(findCurrentUser)
  }, [])

  return (
    <div className={styles.previewImage}>
      <div className={styles.detail}>
        <div className={styles.close} onClick={closeEvt} />
        <img className={styles.img} src={photo.url} alt={photo.title} />
        <div className={styles.imgDetail}>
          <div className={styles.text}><span className={styles.bold}>Title: </span> {photo.title}</div>
          <div className={styles.text}><span className={styles.bold}>Album: </span> {currentAlbum?.title}</div>
          <div className={styles.text}><span className={styles.bold}>Poster: </span> {`${currentUser?.name} (${currentUser?.username})`}</div>
        </div>
      </div>
    </div>
  )
}

export default PreviewImage