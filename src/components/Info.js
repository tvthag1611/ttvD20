import React, { useState } from 'react'
import '../styles/Info.css'

export default function Info({infoAssign, setInfoAssign}) {

  const onChange = event => {
    let target = event.target
    let name = target.name
    let value = target.value
    setInfoAssign({
      ...infoAssign,
      [name] : value
    })
  }

  const onChangeSex = event => {
    setInfoAssign({
      ...infoAssign,
      sex : event.target.value
    })
  }

  const onChangeSchool = event => {
    setInfoAssign({
      ...infoAssign,
      school : event.target.value
    })
  }

  return (
    <div className="page">
      <div className="field field-first">
        <label className="label">Họ và tên<span className="red">*</span></label>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={infoAssign.name}
        />
      </div>
      <div className="field">
        <label className="label">Năm sinh<span className="red">*</span></label>
        <input
          type="text"
          name="yearOfBirth"
          onChange={onChange}
          value={infoAssign.yearOfBirth}
        />
      </div>
      <div className="field">
        <label className="label">Giới tính<span className="red">*</span></label>
        <div className="field-radio">
          <input
            type="radio"
            id="male"
            name="sex"
            value="Nam"
            checked={infoAssign.sex === 'Nam'}
            onChange={onChangeSex}
          />
          <label htmlFor="male">Nam</label>
          <div className="space"></div>
          <input
            type="radio"
            id="female"
            name="sex"
            value="Nu"
            checked={infoAssign.sex === "Nu"}
            onChange={onChangeSex}
          />
          <label htmlFor="female">Nữ</label>
        </div>
      </div>
      <div className="field">
        <label className="label">Quê quán<span className="red">*</span></label>
        <input
          type="text"
          name="hometown"
          onChange={onChange}
          value={infoAssign.hometown}
        />
      </div>
      <div className="field">
        <label className="label">Trường đang theo học<span className="red">*</span></label>
        <div className="field-radio">
          <input
            type="radio"
            id="ptit"
            name="school"
            value="PTIT"
            checked={infoAssign.school === 'PTIT'}
            onChange={onChangeSchool}
          />
          <label htmlFor="ptit">PTIT</label>
          <div className="space"></div>
          <input
            type="radio"
            id="other-school"
            name="school"
            value="Other"
            checked={infoAssign.school === 'Other'}
            onChange={onChangeSchool}
          />
          <label htmlFor="other-school">Trường khác</label>
        </div>
      </div>
      {
        infoAssign.school === "Other" &&
        <div className="field">
          <label className="label">Tên trường<span className="red">*</span></label>
          <input
            type="text"
            name="otherSchool"
            onChange={onChange}
            value={infoAssign.otherSchool}
          />
        </div>
      }
      <div className="field">
        <label className="label">Lớp<span className="red">*</span></label>
        <input
          type="text"
          name="class"
          onChange={onChange}
          value={infoAssign.class}
        />
      </div>
      <div className="field">
        <label className="label">MSV<span className="red">*</span></label>
        <input
          type="text"
          name="msv"
          onChange={onChange}
          value={infoAssign.msv}
        />
      </div>
      <div className="field">
        <label className="label">Email<span className="red">*</span></label>
        <input
          type="text"
          name="email"
          onChange={onChange}
          value={infoAssign.email}
        />
      </div>
      <div className="field">
        <label className="label">SĐT<span className="red">*</span></label>
        <input
          type="text"
          name="phoneNumber"
          onChange={onChange}
          value={infoAssign.phoneNumber}
        />
      </div>
      <div className="field">
        <label className="label">Facebook (Nếu có)</label>
        <input
          type="text"
          name="facebook"
          onChange={onChange}
          value={infoAssign.facebook}
        />
      </div>
      <div className="field">
        <label
          className="label"
        >Nơi ở (trọ) hiện tại, cách học viện bao xa, phương tiện đi lại<span className="red">*</span></label>
        <textarea
          name="address"
          rows="6"
          id="address"
          onChange={onChange}
          defaultValue={infoAssign.address}
        >
        </textarea>
      </div>
    </div>
  )
}
