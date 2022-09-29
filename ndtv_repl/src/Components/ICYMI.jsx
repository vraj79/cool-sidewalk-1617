import React from "react";
import style from "./ICYMI.module.css";
const ICYMI = () => {
  return (
    <div className={style.first}>
      <button style={{ backgroundColor: "black",borderRadius:"5px" }}>
        <h2 style={{ margin: "0", color: "white" }}>ICYMI</h2>
      </button>
      <div className={style.second} >
        <div>
          <img
          width='100%'
          height='450px'
            src="https://c.ndtvimg.com/2022-09/9eb8uv0o_ranbir-_270x300_28_September_22.gif?downsize=315:350"
            alt=""
          />
          <div className={style.icy}>
            <button className={style.btn}>BOLLYWOOD</button>
            <h3 style={{color:'white'}}>
              Ranbir Kapoor Celebrates His Birthday with Alia Bhatt and Fans
            </h3>
          </div>
        </div>
        <div>
          <img
          width='100%'
          height='450px'
            src="https://c.ndtvimg.com/2022-09/7u6g6log_chum_295x200_28_September_22.jpg?downsize=315:350"
            alt=""
          />
          <div className={style.icy}>
            <button className={style.btn}>CELEBS</button>
            <h3 style={{color:'white'}}>More Pics From Chum Darang's Arunachal Diaries</h3>
          </div>
        </div>
        <div>
          <img height='450px' width='100%' src="https://c.ndtvimg.com/2022-09/7cs8ahl_deepak-chahar_625x300_28_September_22.jpeg?im=FeatureCrop,algorithm=dnn,width=315,height=350" alt="" />
          <div className={style.icy}>
          <button className={style.btn}>CRICKET</button>
          <h3 style={{color:'white'}}>Watch Deepak Chahar Cleans Up Bavuna With A Scorcher in 1st T20I</h3>
          </div>
        </div>
        <div>
            <img height='450px' width='100%' src="https://c.ndtvimg.com/2022-09/tgj89fp_tamannaah-bhatia-270_270x300_28_September_22.jpg?downsize=315:350" alt="" />
            <div className={style.icy}>
                <button className={style.btn}>STYLE</button>
                <h3 style={{color:'white'}}>Tamanaah Bhatia's Red Floral Saree Gives Ethnic Wear A Modern Touch</h3>
            </div>
        </div>
        <div>
            <img height='450px' width='100%' src="https://c.ndtvimg.com/2022-09/bovvm5lg_ar-rahman_295x200_28_September_22.jpg?downsize=315:350" alt=""></img>
            <div className={style.icy}>
                <button className={style.btn}>ENTERTAINMENT</button>
                <h3 style={{color:'white'}}>"Who Are You To Re-Imagine":AR Rahman Reacts To Remix Culture</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ICYMI;
