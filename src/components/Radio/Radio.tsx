import './Radio.css'

interface RadioProps {
  onCheck: Function,
  name: string,
  checked: boolean,
  children: React.ReactNode
}

const Radio = (props: RadioProps) => {
  const { name, children, checked, onCheck } = props

  return (
    <label onClick={() => onCheck(name)} className="Radio">
      <input type="radio" checked={checked} readOnly name={name} />
      <div className="Radio-content">
        <div className="Radio-details">
          <p>{children}</p>
        </div>
      </div>
    </label>
  )
}

export default Radio;