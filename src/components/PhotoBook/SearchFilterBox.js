import { useDispatch, useSelector } from 'react-redux'
import styles from 'styles/PhotoBook/SearchFilterBox.module.scss'

const SearchFilterBox = () => {
  const dispatch = useDispatch()
  const album = useSelector((state) => state.photoReducer.album)
  const backgroundColor = [
    {background: '#a98289'},
    {background: '#8db57b'},
    {background: '#a87775'},
    {background: '#995774'},
    {background: '#817764'},
    {background: '#b39576'},
    {background: '#2d2b20'},
    {background: '#a8602f'},
    {background: '#83533f'}
  ]
  const randomColor = (max) => {
    return Math.floor(Math.random() * max)
  }
  return (
    <div className={styles.searchFilterBox}>
      <div className={styles.title}>Album Filter</div>
      <ul className={styles.albumList}>
      {album.data?.map((al, i) => 
        <li key={i}
            onClick={() => dispatch({
              type: 'SET_ALBUM_FILTERED',
              payload: {...al, background: backgroundColor[randomColor(backgroundColor.length)]?.background}
            })}
            className={styles.item} 
            style={{background: backgroundColor[randomColor(backgroundColor.length)]?.background}}>
          <div className={styles.text}>
            {al.title}
          </div>
        </li>
      )}
      </ul>
    </div>
  )
}

export default SearchFilterBox