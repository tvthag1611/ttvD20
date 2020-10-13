import React, { useState } from 'react'
import '../styles/Info.css'

export default function Info() {

  return (
    <div className="page">
      <div className="field field-first">
        <label className="label">Họ và tên<span className="red">*</span></label>
        <input
          type="text"
          name="name"
        />
      </div>
      <div className="field">
        <label className="label">Năm sinh<span className="red">*</span></label>
        <input
          type="text"
          name="yearOfBirth"
        />
      </div>
      <div className="field">
        <label className="label">Giới tính<span className="red">*</span></label>
        <div className="field-radio">
          <input type="radio" id="male" name="sex" value="Nam" />
          <label htmlFor="male">Nam</label>
          <div className="space"></div>
          <input type="radio" id="female" name="sex" value="Nữ" />
          <label htmlFor="female">Nữ</label>
        </div>
      </div>
      <div className="field">
        <label className="label">Quê quán<span className="red">*</span></label>
        <input
          type="text"
          name="provice"
        />
      </div>
      <div className="field">
        <label className="label">Email<span className="red">*</span></label>
        <input
          type="text"
          name="email"
        />
      </div>
      <div className="field">
        <label className="label">Facebook (Nếu có)</label>
        <input
          type="text"
          name="fb"
        />
      </div>
      <div className="field">
        <label className="label">Trường đang theo học<span className="red">*</span></label>
        <div className="field-radio">
          <input type="radio" id="ptit" name="school" value="PTIT" />
          <label htmlFor="ptit">PTIT</label>
          <div className="space"></div>
          <input type="radio" id="other-school" name="school" value="Trường khác" />
          <label htmlFor="other-school">Trường khác</label>
        </div>
      </div>
      <div className="field">
        <label className="label">Tên trường<span className="red">*</span></label>
        <input
          type="text"
          name="school"
        />
      </div>
      <div className="field">
        <label className="label">Lớp<span className="red">*</span></label>
        <input
          type="text"
          name="class"
        />
      </div>
      <div className="field">
        <label className="label">MSV<span className="red">*</span></label>
        <input
          type="text"
          name="ID"
        />
      </div>
      <div className="field">
        <label className="label">SĐT<span className="red">*</span></label>
        <input
          type="text"
          name="phone"
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
        >
        </textarea>
      </div>
    </div>
  )
}
