
import { Wizard, WizardStep } from '../../components';
import { useReducer, useState } from 'react';
import { reducer } from '../../reducer';
import data from '../../mock';
import { useHistory } from 'react-router-dom';
import './Quiz.css';

const initialState = data.reduce((acc, { id, alternatives }) => ({
  ...acc,
  [id]: { value: alternatives[0].score, id: alternatives[0].id }
}),{}) 


function Quiz() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory()
  const onChange = ({ questionId, alternativeId, value } : { questionId: string, alternativeId: string, value: string }) => {
    dispatch({ 
      type: 'SET_VALUE', 
      payload: { 
        [questionId]: {
          value: Number(value.replace(`${alternativeId}-`,'')),
          id: alternativeId
        }
      }})
  }
  

  const next = () => {
    if(selectedIndex < data.length - 1){
      setSelectedIndex(selectedIndex + 1)
    } else {
      const result = Object.keys(state).reduce((acc, key) => state[key].value + acc, 0)

      history.push('/finish-quiz', { result: result < 28 ? 'introvert': 'extrovert' })
    }
  }
  
  const previous = () => {
    if(selectedIndex > 0){
      setSelectedIndex(selectedIndex - 1)
    }
  }

  const steps = data.map(step => ({
    title: step.question,
    content: <WizardStep 
      {...{
        ...step,
        state,
        onChange,
        isLastStep: selectedIndex === data.length - 1,
        next,
        previous
      }}
    />
  }))

  return (
    <div className="Quiz-container">
        <Wizard
          selectedIndex={selectedIndex}
          steps={steps}
        />
    </div>
  );
}

export default Quiz;
