import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <>
      <nav>
        <div className='Header-container'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/start-quiz'>Start Quiz</Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Header;