import './Wizard.css'

interface WizardProps {
  steps: { title: string, content: JSX.Element }[];
  selectedIndex: number;
}

const Wizard = (props: WizardProps) => {
    const { steps, selectedIndex } = props;
    const total = steps.length;

    return (
      <>
        <ul className='steps'>
          {steps.map(({ title, content }, index) => {
            const classNames = ['step'];
            const isStepSelected = index === selectedIndex;
            if (index === selectedIndex) {
              classNames.push('step__active');
            } else if (index < selectedIndex) {
              classNames.push('step__success');
            }

            return (
              <li className={classNames.join(' ')} key={`${title}-${index}`}>
                <span className='step__circle' />
                <span className='step__text'>{isStepSelected ? `Question ${index + 1} out of ${total}` : null}</span>
              </li>
            )
          })}
        </ul>
        <span>
          {(steps[selectedIndex] && steps[selectedIndex].content) || ''}
        </span>
      </>
    )
}
export default Wizard;