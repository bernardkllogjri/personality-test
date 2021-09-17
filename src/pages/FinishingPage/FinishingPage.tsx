
import { useLocation } from 'react-router-dom';
import messages from './messages'
import './FinishingPage.css'

function FinishingPage() {

  const location = useLocation()
  const { state } : { state: any } = location || {}
  const { result = localStorage.getItem('personality-test-result') || '' }: { result: string } = state || {}

  if(result){
    localStorage.setItem('personality-test-result', result)
  }
  
  return (
    <div className="FinishPage-wrapper">
      <div className="FinishPage-hero-image">
        <div className="FinishPage-hero-text">
          <h1>{result || '404'}</h1>
        </div>
      </div>
      <div className="FinishPage-summary" dangerouslySetInnerHTML={{ __html: messages[result] || 'Not found.' }} />
    </div>
  );
}

export default FinishingPage;
