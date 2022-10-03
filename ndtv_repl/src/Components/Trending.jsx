import React from 'react'
import style from './Trending.module.css'
const Trending = () => {
  return (
    <div className={style.first}>
      <button style={{ backgroundColor: "black",borderRadius:"5px" }}><h2 style={{ margin: "0", color: "white" }}>TRENDING</h2></button>
      <div className={style.second}>
        <div style={{backgroundColor:'white'}}>
          <img width='100%' src="https://c.ndtvimg.com/2021-06/9924tgg_ekta-kapoor-_120x90_07_June_21.jpg" alt="" />
          <h3>Arrest Warrant Against Producer Ekta Kapoor, Mother Over Web Series</h3>
        </div>
        <div style={{backgroundColor:'white'}}>
          <img width='100%' src="https://c.ndtvimg.com/2022-09/oe2286ss_jackie-walorski_120x90_28_September_22.jpg" alt="" />
          <h3>Watch: "Where's Jackie?" Biden Asks For Lawmaker Who Died In August</h3>
        </div>
        <div style={{backgroundColor:'white'}}>
          <img width='100%' src="https://c.ndtvimg.com/2022-09/ohjgehp_harjot-kaur-bhamra-head-of-women-and-child-development-corporation-at-tuesdays-function-in-patna_120x90_28_September_22.jpg" alt="" />
          <h3>"Want Condoms Too?" Bihar Officer's Shocker On Girl's Sanitary Pad Query</h3>
        </div>
        <div style={{backgroundColor:'white'}}>
          <img width='100%' src="https://c.ndtvimg.com/2022-09/upmirnd_girl-meets-rahul-gandhi-bharat-jodo-240_120x90_28_September_22.jpg" alt="" />
          <h3>Viral Video: Kerala Girl Can't Control Tears On Meeting Rahul Gandhi</h3>
        </div>
        <div style={{backgroundColor:'white'}}>
          <img width='100%' src="https://c.ndtvimg.com/2022-09/0qeuo3qg_anil-chauhan_120x90_28_September_22.jpg" alt="" />
          <h3>New Chief Of Defence Staff (CDS) Is Lt General Anil Chauhan (Retired)</h3>
        </div>
        <div style={{backgroundColor:'white'}}>
          <img width='100%' src="https://c.ndtvimg.com/2022-09/69p8h5mo_doctor-neat-prescription-240_120x90_28_September_22.jpg" alt="" />
          <h3>Kerala Doctor's Super Neat Writing On Prescription Goes Viral</h3>
        </div>
      </div>
    </div>
  )
}

export default Trending