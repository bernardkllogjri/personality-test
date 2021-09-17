import Button from '../Button/Button';
import Radio from '../Radio/Radio'

interface WizardStepProps {
  id: string, 
  question: string,
  alternatives: { id: string, text: string, score?: number }[],
  next: Function,
  previous: Function,
  onChange: Function,
  state: any,
  isLastStep: boolean
}

const WizardStep = (props: WizardStepProps) => {
  const { id, question, alternatives, next, previous, isLastStep, state, onChange } = props

  return (
    <>
      <div className="Radio-container">
        <div className="Radios">
          <div className="Radio-title">{question}</div>
          {alternatives.map(alternative => (
              <Radio 
                key={`${id}-${alternative.id}`} 
                checked={state[id].value === alternative.score}
                name={`${alternative.id}-${alternative.score}`}
                onCheck={(value: string) => onChange({ questionId: id, alternativeId: alternative.id, value })}
              >
                {alternative.text}
              </Radio>
          ))}
          <div>
            <Button type='secondary' onClick={previous}>&#60; Previous</Button>
            {isLastStep &&  <Button type='primary' onClick={next} >Finish</Button>}
            {!isLastStep &&  <Button type='primary' onClick={next} >Next &#x3e;</Button>}
          </div>
        </div>
      </div>
    </>
  )
}

export default WizardStep