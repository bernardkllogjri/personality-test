import { useHistory } from 'react-router-dom'
import { Button } from '../../components'
import './Home.css'

const Home = () => {

  const history = useHistory()

  return (
    <div className="Home-wrapper">
    <div className="Home-hero-image">
      <div className="Home-hero-text">
        <h1>Test: Are you an introvert or an extrovert?</h1>
      </div>
    </div>
    <div className="Home-summary">
      <p>So do you consider yourself more of an introvert or an extrovert? Take this test, put together with input from psychoanalyst Sandrine Dury, and find out</p>
      <h1>Take this quick quiz now to find out</h1>
      <Button type='primary' onClick={() => history.push('/start-quiz')}>Start quiz</Button>
      <p>At work, is it you who gets noticed first or perhaps the other people around you? Do you feel compelled to take centre-stage or are you more comfortable back-stage? If it’s the former, then you are eager for contact — warm and happy human relations. If it’s the latter, then solitude suits and stimulates you more and hell is often other people…</p>
    </div>
  </div>
  )
}

export default Home