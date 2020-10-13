import React, { useState } from 'react';
import './App.css';
import Step from './components/Step';
import Info from './components/Info';
import Club from './components/Club';
import Self from './components/Self';

function App() {

  const [step, setStep] = useState(1)
  const [isAssign, setIsAssign] = useState(false)
  const [done, setDone] = useState(false)
  const nextStep = () => {
    setStep(step + 1)
  }

  const previousStep = () => {
    setStep(step - 1)
  }

  const signUpClub = () => {
    setIsAssign(false)
    setDone(true)
    console.log(step)
  }

  return (
    <div className="content">
      {
        !isAssign && !done &&
        <div className="start">
          <h1>Chào mừng bạn đến với CLB Lập Trình PTIT</h1>
          <button
            type="button"
            className="assign-button"
            onClick={() => setIsAssign(true)}
          >Đăng kí</button>
        </div>
      }
      {
        done ?
        <div className="end">
          <h1>Cảm ơn bạn đã đăng kí, rất mong được gặp bạn sớm nhất!</h1>
          <a
            href="https://www.facebook.com/clubproptit"
          >Visit Us</a>
        </div> : null
      }
      {
        isAssign ?
        <div className="content_asign">
        <header>Đăng kí tham gia CLB Lập Trình PTIT</header>
        <Step step={step}/>
        <div className="form-outer">
          <form action="#">
            {step === 1 ? <Info /> : step === 2 ? <Club /> : <Self />}
          </form>
        </div>
        <div className="next-step">
          {
          (step > 1 && step < 4) &&
          <button
            type="button"
            className="pre-btn"
            onClick={previousStep}
          >
            Previous
          </button>
          }
          <button
            type="button"
            onClick={step === 4 ? signUpClub : nextStep}
          >
            {step === 4 ? "Đăng ký" : "Next"}
          </button>
        </div>
      </div> : null
      }
    </div>
  );
}

export default App;
