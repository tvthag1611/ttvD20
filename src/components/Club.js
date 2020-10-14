import React from 'react'
import '../styles/Info.css'

export default function Club({infoAssign, setInfoAssign}) {
  const onChange = event => {
    let target = event.target
    let name = target.name
    let value = target.value
    setInfoAssign({
      ...infoAssign,
      [name] : value
    })
  }
  return (
    <div className="page">
      <div className="field field-first">
        <label className="label">Bạn có thể tham gia CLB vào những thời gian nào trong tuần?<span className="red">*</span></label>
        <textarea
          name="time"
          rows="6"
          onChange={onChange}
          defaultValue={infoAssign.time}
        >
        </textarea>
      </div>
      <div className="field">
        <label className="label">Tại sao bạn muốn tham gia CLB?<span className="red">*</span></label>
        <textarea
          name="why"
          rows="6"
          onChange={onChange}
          defaultValue={infoAssign.why}
        >
        </textarea>
      </div>
      <div className="field">
        <label className="label">Bạn mong muốn gì khi tham gia CLB?<span className="red">*</span></label>
        <textarea
          name="you_want"
          rows="6"
          onChange={onChange}
          defaultValue={infoAssign.you_want}
        >
        </textarea>
      </div>
      <div className="field">
        <label className="label">Bạn có gửi đơn đăng ký tham gia CLB nào khác không? Nếu có,
        bạn nghĩ mình đủ thời gian cho tất cả các CLB không?
        <span className="red">*</span></label>
        <textarea
          name="otherClub"
          rows="6"
          onChange={onChange}
          defaultValue={infoAssign.otherClub}
        >
        </textarea>
      </div>
      <div className="field">
        <label className="label">Nếu trở thành thành viên chính thức của CLB,
        bạn dự tính sẽ thực hiện những gì?
        <span className="red">*</span></label>
        <textarea
          name="you_will"
          rows="6"
          onChange={onChange}
          defaultValue={infoAssign.you_will}
        >
        </textarea>
      </div>
    </div>
  )
}
