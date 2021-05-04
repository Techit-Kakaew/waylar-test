import { useSelector } from 'react-redux'
import styles from 'styles/PhotoBook/PhotoList.module.scss'

const PhotoList = () => {
    const photoBook = useSelector(state => state.photoReducer.photo)

    const handlePhotoListRender = () => {
        if(photoBook.fetching) {
            return (
                <div className={styles.photoList}>Loading...</div>
            )
        }
        if(photoBook.data) {
            const currentAlbum =  photoBook.data.filter(item => item.albumId === 1)
            return (
                <div className={styles.photoList}>
                    {currentAlbum.map(photo => 
                        <div key={photo.id} className={styles.card}>
                            <div className={styles.box}>
                                <div className={styles.thumbnailBox}>
                                    <img src={photo.thumbnailUrl} className={`img ${styles.thumbnail}`} />
                                </div>
                                <div className={styles.title}>{photo.title}</div>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
        return (
            <div className={styles.photoList}>{photoBook.message}</div>
        )
    }
    return (
        handlePhotoListRender()
    )
}

export default PhotoList