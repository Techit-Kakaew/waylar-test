import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PreviewImage from './PreviewImage'
import styles from 'styles/PhotoBook/PhotoList.module.scss'
import 'styles/general/loader.scss'

const PhotoList = ({ searchText }) => {
  const dispatch = useDispatch()
  const currentAlbum = useSelector((state) => state.photoReducer.currentAlbum)
  const photoBook = useSelector((state) => state.photoReducer.photo)
  const albumFiltered = useSelector((state) => state.photoReducer.albumFiltered)
  const [albumIds, setAlbumIds] = useState([])
  const [isShowPreview, setIsShowPreview] = useState(false)
  const [previewData, setPreviewData] = useState(null)

  useEffect(() => {
    setAlbumIds(prev => [...prev, currentAlbum])
  }, [currentAlbum])

  const photoFilter = () => {
    if(albumFiltered) {
      return photoBook.data?.filter(photo => albumFiltered.id === photo.albumId 
        && photo.title.toLowerCase().includes(searchText.toLowerCase()))
    }
    if(searchText && searchText.length > 1) {
      return photoBook.data?.filter(photo => photo.title.toLowerCase().includes(searchText.toLowerCase()))
    }
    return photoBook.data?.filter(photo => albumIds.includes(photo.albumId))
  }

  const handleOpenPreview = (photo) => {
    setPreviewData({...photo})
    setIsShowPreview(!isShowPreview)
  }

  const handlePhotoListRender = () => {
    if (photoBook.fetching) {
      return (
        <div className={styles.photo}>
          <div className={styles.loading}>
            <div className="loader" />
          </div>
        </div>
      )
    }
    if (photoBook.data) {
      return (
        <div className={styles.photo}>
          {isShowPreview && 
          <PreviewImage 
            photo={previewData} 
            closeEvt={() => setIsShowPreview(!isShowPreview)} />}
          {albumFiltered && <div className={styles.albumFiltered}>
            Album filtered:
            <div style={{background: albumFiltered.background}} className={styles.title}>
              {albumFiltered.title}
              <div className={styles.close}
                  onClick={() => dispatch({
                    type: 'SET_ALBUM_FILTERED',
                    payload: null
                  })}  />
            </div>
          </div>}
          {(searchText && albumFiltered) && <div className={styles.searchFound}>
            ค้นพบในอัลบั้มนี้: {photoFilter().length} รูป
          </div>}
          {(searchText.length > 1 && !albumFiltered) && <div className={styles.searchFound}>
            ค้นพบ: {photoFilter().length} รูป
          </div>}
          <div className={styles.list}>
            {photoFilter().map((photo) => (
              <div key={photo.id} 
                  className={styles.card }
                  onClick={() => handleOpenPreview(photo)}>
                <div className={styles.box}>
                  <div className={styles.thumbnailBox}>
                    <img
                      alt={`img-${photo.id}`}
                      src={photo.thumbnailUrl}
                      className={`img ${styles.thumbnail}`}
                    />
                  </div>
                  <div className={styles.title}>{photo.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
    return (
      <div className={styles.photo}>
        <div className={styles.error}>{photoBook.message}</div>
      </div>
    )
  }
  
  return handlePhotoListRender()
}

export default PhotoList
