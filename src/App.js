import './App.css';
import StarIcon from './resources/icon-star.svg'

function App() {
  return (
    <div className="App">
        <div className="card-container">
            <div className='container'>
                <div className="star-circle">
                    <img className='star-icon' src={StarIcon} alt="favorite icon" />
                </div>
                <h2>How did we do?</h2>
                <p>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!
                </p>
                <div className='numbers'>
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                    <div className="number">4</div>
                    <div className="number">5</div>
                </div>
                <button className='btn'>SUBMIT</button>
            </div>
        </div>
        <footer class="footer">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Petyo Arhangelov</a>.
        </footer>
    </div>
  );
}

export default App;
