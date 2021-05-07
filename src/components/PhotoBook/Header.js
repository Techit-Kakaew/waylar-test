import { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import SearchFilterBox from './SearchFilterBox'
import { Input } from '../general'
import styles from "styles/PhotoBook/Header.module.scss"

const Header = ({ callbackSearchPhoto }) => {
  const albumFiltered = useSelector((state) => state.photoReducer.albumFiltered)
  const [focused, setFocused] = useState(false)
  const searchRef = useRef(null)

  const onFocus = () => setFocused(true)
  const onBlur = () => {
    setTimeout(() => {
      setFocused(false)
    }, 250)
  }
  
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        Photo Book
      </div>
      <div className={styles.action}>
        <Input inputRef={searchRef} 
              placeholder={`${albumFiltered ? 'ค้นหาชื่อรูปในอัลบั้มที่คุณเลือก' : 'ค้นหาชื่อรูปทั้งหมด'}`}
              type="text"
              focusEvt={onFocus}
              blurEvt={onBlur}
              changeEvt={(e) => callbackSearchPhoto(e.target.value)}
              customStyles={{
                borderRadius: "16px"
              }} />
        {focused && <SearchFilterBox />}
      </div>
    </div>
  )
}

export default Header