import React from 'react'
import '../styles/Step.css'

export default function Step({step}) {
  return (
    <div className="progress-bar">
      <div className="step">
        <p className={step > 1 ? "active" : null}>Thông tin</p>
        <div className={step > 1 ? "bullet active" : "bullet"}>
          {
            step > 1 ?
            <i className="fas fa-check checked"></i>
            : <span>1</span>
          }
        </div>
      </div>
      <div className="step">
        <p className={step > 2 ? "active" : null}>Hỏi về CLB</p>
        <div className={step > 2 ? "bullet active" : "bullet"}>
          {
            step > 2 ?
            <i className="fas fa-check checked"></i>
            : <span>2</span>
          }
        </div>
      </div>
      <div className="step">
        <p className={step > 3 ? "active" : null}>Tự đánh giá</p>
        <div className={step > 3 ? "bullet active" : "bullet"}>
          {
            step > 3 ?
            <i className="fas fa-check checked"></i>
            : <span>3</span>
          }
        </div>
      </div>
    </div>
  )
}
