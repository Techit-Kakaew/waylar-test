import 'styles/general/input.scss'

const Input = ({ inputRef, label, type, placeholder, changeEvt, keyDownEvt, focusEvt, blurEvt, customStyles }) => {

  return (
    <input
      ref={inputRef}
      className="input-data"
      type={type}
      placeholder={placeholder}
      style={customStyles}
      onFocus={focusEvt}
      onBlur={blurEvt}
      onChange={changeEvt}
      onKeyDown={keyDownEvt} />
  )
}

export default Input