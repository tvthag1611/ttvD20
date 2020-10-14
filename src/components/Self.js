import React from 'react'
import Slider from '@material-ui/core/Slider';
import '../styles/Info.css'

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '1',
  },
  {
    value: 20,
    label: '2',
  },
  {
    value: 30,
    label: '3',
  },
  {
    value: 40,
    label: '4',
  },
  {
    value: 50,
    label: '5',
  },
  {
    value: 60,
    label: '6',
  },
  {
    value: 70,
    label: '7',
  },
  {
    value: 80,
    label: '8',
  },
  {
    value: 90,
    label: '9',
  },
  {
    value: 100,
    label: '10',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value);
}
export default function Self({infoAssign, setInfoAssign}) {
  const onChange = name => (event, value) => {
    setInfoAssign({
      ...infoAssign,
      [name] : value/10
    })
  }
  return (
    <div className="page page-self">
      <div className="page-self__item">
        <p>Tự đánh giá khả năng lãnh đạo<span className="red">*</span></p>
        <Slider
          value={infoAssign.leader * 10}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={onChange('leader')}
        />
      </div>
      <div className="page-self__item">
        <p>Tự đánh giá khả năng làm việc nhóm<span className="red">*</span></p>
        <Slider
          value={infoAssign.group * 10}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={onChange('group')}
        />
      </div>
      <div className="page-self__item">
        <p>Tự đánh giá khả năng giao tiếp<span className="red">*</span></p>
        <Slider
          value={infoAssign.communication * 10}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={onChange('communication')}
        />
      </div>
      <div className="page-self__item">
        <p>Tự đánh giá khả năng sáng tạo<span className="red">*</span></p>
        <Slider
          value={infoAssign.creation * 10}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={onChange('creation')}
        />
      </div>
    </div>
  );
}
