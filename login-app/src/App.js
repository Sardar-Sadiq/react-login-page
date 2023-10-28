import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='box'>
          <div className='first-box'>
            <div className='loginbox'>
              <h4>First Name</h4>
              <input type='text'></input>
              <h4>Last Name</h4>
              <input type='text'></input>
              <h4>Password</h4>
              <input type='password'></input>
              </div>
              <div className='btn'>
                    <button className='btn1'>login</button>
                    <button className='btn2'>Reset</button>
              </div>
          </div>
          <div className='second-box'>
              <h1>ali</h1>
          </div>
      </div>
    </div>
  );
}

export default App
