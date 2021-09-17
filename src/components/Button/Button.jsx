import './Button.css'

const Button = ({ children, type, ...props }) => {
  return (
    <button className={`Button Button-${type}`} {...props} >{children}</button>
  )
}

export default Button