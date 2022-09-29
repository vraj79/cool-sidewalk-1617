import React from "react";
import style from "./Opinion.module.css";
const Opinion = () => {
  return (
    <div className={style.first}>
      <h3>Opinion</h3>
      <div className={style.second}>
        <div>
          <div className={style.second}>
            <img
              width="100%"
              src="https://c.ndtvimg.com/2022-07/9emkgmig_hyundai-logo_120x90_13_July_22.jpg?downsize=100:75"
              alt=""
            />
            <h3>
              Opinion: Oops, Wrong Hyundai. India's Industrial Policy Misfires -
              Again
            </h3>
            <hr />
          </div>
          <h4 style={{ textAlign: "center", color: "gray" }}>Andy Mukherjee</h4>
          <div>
            <hr />
          </div>
          <div className={style.second}>
            <img
              width="100%"
              src="https://c.ndtvimg.com/2022-09/aqkvbdug_mohan_120x91_26_September_22.jpg?downsize=100:75"
              alt=""
            />
            <h3>Opinion: The RSS Is No Longer What It Used To Be</h3>
            <hr />
          </div>
          <h4 style={{ textAlign: "center", color: "gray" }}>Pavan K. Varma</h4>
        </div>

        <div>
          <div className={style.second}>
            <img
              width="100%"
              height="136.5px"
              src="https://c.ndtvimg.com/2022-09/cj5ga4ns_sonia-gandhi-getty-240_120x91_27_September_22.jpg?downsize=100:75"
              alt=""
            />
            <h3>
              Opinion: With Rajasthan Mishandling, Sonia Gandhi Delivers A
              Massive Mistake
            </h3>
            <hr />
          </div>
          <h4 style={{ textAlign: "center", color: "gray" }}>Ashutosh</h4>
          <div>
            <hr />
          </div>
          <div className={style.second}>
            <img
              width="100%"
              src="https://c.ndtvimg.com/2022-09/6a543boo_hunger-helpline_120x91_24_September_22.jpg?downsize=100:75"
              alt=""
            />
            <h3>
              Opinion: Food Insecurity: The Story That Won't Make Prime Time
              News
            </h3>
            <hr />
          </div>
          <h4 style={{ textAlign: "center", color: "gray" }}>Derek O'Brien</h4>
        </div>
        <div>
          <div className={style.second}>
            <img
              width="100%"
              height="136.5px"
              src="https://c.ndtvimg.com/2022-09/1csbb1k_ashok-gehlot-rahul-gandhi-ani-240_240x180_20_September_22.jpg?downsize=100:75"
              alt=""
            />
            <h3>
              Opinion: Ashok Gehlot Goes From "Preferred Candidate" To
              Full-Blown Rebel
            </h3>
          </div>
          <h4 style={{ textAlign: "center", color: "gray" }}>
            Swati Chaturvedi
          </h4>
          <div>
            <hr />
          </div>
          <div className={style.second}>
            <img
              width="100%"
              src="https://c.ndtvimg.com/2022-09/k9g0r30g_mohan-bhagwat-mosque-visit_120x90_22_September_22.jpg?downsize=100:75"
              alt=""
            />
            <h3>
              Blog: Mohan Bhagwat-Muslim Meet Is Good Symbolism, Not Dialogue
            </h3>
          </div>
          <h4 style={{ textAlign: "center", color: "gray" }}>Mohd Asim</h4>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
