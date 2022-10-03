import React from "react";
import style from "./NewsCategory.module.css";
const NewsCategory = () => {
  return (
    <div className={style.first}>
      <div className={style.second}>
        <div>
          <button style={{ backgroundColor: "black", borderRadius: "5px" }}>
            <h2 style={{ margin: "0", color: "white" }}>HINDI NEWS</h2>
          </button>
          <div className={style.hindi}>
            <div className={style.hindione}>
              <img
                src="https://i.ndtvimg.com/i/2017-04/new-currency-bills-2000-rupees-notes_240x180_61492485961.jpg?downsize=80:60"
                alt=""
              />
              <h4>
                त्योहारों पर बढ़ सकती है सैलरी...? बुधवार को मिल सकता है DA Hike
                का तोहफा...?
              </h4>
            </div>
            <div className={style.hindione}>
              <img
                src="https://c.ndtvimg.com/2022-09/63qln5i8_vicky-kaushal-katrina-kaif-karan-johar_625x300_27_September_22.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
              <h4>
                विक्की और कैटरीना की शादी का इनवाइट नहीं मिलने का करण को है
                मलाल, बोले- यह मेरे लिए शर्मनाक था
              </h4>
            </div>
            <div className={style.hindione}>
              <img
                src="https://c.ndtvimg.com/2022-09/abtedqp8_india_625x300_27_September_22.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
              <h4>
                मां जैसी कोई नहीं: साइकिल पर बच्चे को बैठा कर मां का वीडियो
                वायरल, लोगों ने कहा- मां है तो दुनिया है
              </h4>
            </div>
            <div className={style.hindione}>
              <img
                src="https://c.ndtvimg.com/2022-09/emn60df_india_625x300_27_September_22.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
              <h4>
                एक दूसरे में उलझे हुए कितने सांप इस तस्वीर में मौजूद हैं? वीडियो
                देख जानें पूरी सच्चाई
              </h4>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "10px" }} className={style.cricket}>
          <button style={{ backgroundColor: "black", borderRadius: "5px" }}>
            <h2 style={{ margin: "0", color: "white" }}>CRICKET NEWS</h2>
          </button>
          <div>
            <div style={{ display: "flex", gap: "21px" }}>
              <div>
                <img
                  width="350px"
                  height="300px"
                  src="https://c.ndtvimg.com/2022-09/39kpbd8g_taniya-bhatia_625x300_26_September_22.jpg?im=FitAndFill,algorithm=dnn,width=242,height=182"
                  alt=""
                />
                <h3 className={style.crichead}>
                  India Cricketer Slams London Hotel For Not Responding To
                  Robbery Complaint
                </h3>
              </div>
              <div>
                <img
                  width="350px"
                  height="300px"
                  src="https://c.ndtvimg.com/2022-09/5g8q15o_babar-azam-vs-naseem-shah-twitter_120x90_28_September_22.jpg?downsize=242:182"
                  alt=""
                />
                <h3 className={style.crichead}>
                  Watch What Happened When Babar Azam Took On Fiery Pakistan
                  Pacer In Nets
                </h3>
              </div>
            </div>
            <div style={{ display: "flex", gap: "21px", marginTop: "-100px" }}>
              <div>
                <img
                  width="350px"
                  height="300px"
                  src="https://c.ndtvimg.com/2022-07/016kku5o_sanju-samson_625x300_29_July_22.jpg?im=FaceCrop,algorithm=dnn,width=242,height=182"
                  alt=""
                />
                <h3 className={style.crichead}>
                  Sanju Samson Likely To Be Named Vice-Captain For South Africa
                  ODIs: Report
                </h3>
              </div>
              <div>
                <img
                  width="350px"
                  height="300px"
                  src="https://c.ndtvimg.com/2022-08/0ujr9eqo_kohli-babar_625x300_24_August_22.jpg?im=FeatureCrop,algorithm=dnn,width=242,height=182"
                  alt=""
                />
                <h3 className={style.crichead}>
                  Babar Azam 61 Runs Away From Breaking Another Big Virat Kohli
                  Record
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <button style={{ backgroundColor: "black", borderRadius: "5px" }}>
            <h2 style={{ margin: "0", color: "white" }}>BUSINESS NEWS</h2>
          </button>
          <div className={style.business}>
            <div className={style.businessone}>
              <p>
                4% Dearness Allowance Hike, Festive Cheer For 47 Lakh Central
                Employees
              </p>
              <img
                width="60%"
                src="https://c.ndtvimg.com/2021-02/hd824m9o_money-generic-rupees-generic_625x300_25_February_21.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
            </div>
            <div>
              <hr />
            </div>
            <div className={style.businessone}>
              <p>
                Forex Reserves Set To Shrink Further, Stir 2008 Crisis'
                Memories: Report
              </p>
              <img
                width="60%"
                src="https://c.ndtvimg.com/2022-09/1241hp8g_image_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
            </div>
            <div>
              <hr />
            </div>
            <div className={style.businessone}>
              <p>
                Rupee Ends At New Record Low, Within Striking Distance Of 82 Per
                Dollar
              </p>
              <img
                width="60%"
                src="https://c.ndtvimg.com/2022-08/muvr4tq_rupee-generic-reuters_625x300_05_August_22.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
            </div>
            <div>
              <hr />
            </div>
            <div className={style.businessone}>
              <p>
                Sell-Off In Nifty, Sensex Extends To Sixth Straight Day, More
                Pain Ahead
              </p>
              <img
                width="60%"
                src="https://c.ndtvimg.com/2022-05/e4nbnspg_nse-nifty_625x300_25_May_22.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.aefl} style={{ marginTop: "-70px" }}>
        <div>
          <button style={{ backgroundColor: "black", borderRadius: "5px" }}>
            <h2 style={{ margin: "0", color: "white" }}>AUTO NEWS</h2>
          </button>
          <div>
            <img
              width="390px"
              height="200px"
              src="https://c.ndtvimg.com/2022-09/64eoc74c_tiago-ev_650x400_28_September_22.jpeg?im=FaceCrop,algorithm=dnn,width=290,height=218"
              alt=""
            />
            <h2
              style={{
                position: "relative",
                bottom: "90px",
                padding: "1%",
                color: "white",
              }}
            >
              Tata Tiago EV Launched In India; Prices Here
            </h2>
          </div>
          <div style={{ marginTop: "-95px" }}>
            <div className={style.education}>
              <p>
                Toyota Urban Cruiser Hyryder Launched; Full Price List Revealed
              </p>
              <img
                src="https://c.ndtvimg.com/2022-09/1ejqp73_toyota-urban-cruiser-hyryder_650x400_09_September_22.jpeg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
            </div>
            <div className={style.education}>
              <p>Last Lamborghini Aventador Rolls Out Of Production</p>
              <img
                src="https://c.ndtvimg.com/2022-09/63dtro6c_aventador_650x400_27_September_22.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
            </div>
            <div className={style.education}>
              <p>
                KTM RC 390 & RC 200 Special GP Edition Launched In India; Prices
                Here
              </p>
              <img
                src="https://c.ndtvimg.com/2022-09/1seik47o_ktm-rc-390-motogp-edition_650x400_27_September_22.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <button style={{ backgroundColor: "black", borderRadius: "5px" }}>
            <h2 style={{ margin: "0", color: "white" }}>EDUCATION</h2>
          </button>
          <div className={style.education}>
            <p>CUET PG 2022 Result Tomorrow, Confirms UGC Chairman</p>
            <img
              width="100px"
              height="100px"
              src="https://cache.careers360.mobi/media/presets/625X300/article_images/2022/9/24/CUET-PG-result_2022-cutoff-scores-featured-Images.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
              alt=""
            />
          </div>
          <hr />
          <div className={style.education}>
            <p>
              CEED, UCEED 2023 Websites Launched; Registration Starts On
              September 30
            </p>
            <img
              width="100px"
              height="100px"
              src="https://cache.careers360.mobi/media/presets/625X300/article_images/2022/9/24/ceed_uceed-featured-image.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
              alt=""
            />
          </div>
          <hr />
          <div className={style.education}>
            <p>
              JEECUP Counseling Round 4 Registration Starts Today, Check Steps
              To Apply
            </p>
            <img
              width="100px"
              height="100px"
              src="https://cache.careers360.mobi/media/presets/625X300/article_images/2022/9/24/JEECUP-Counselling-2022-Round-4-Registration-Featured-Image.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
              alt=""
            />
          </div>
          <hr />
          <div className={style.education}>
            <p>
              West Bengal WBMCC NEET PG 2022 Counselling Registration Begins
            </p>
            <img
              width="100px"
              height="100px"
              src="https://cache.careers360.mobi/media/presets/625X300/article_images/2022/9/23/mbbs-featured-image.jpg?im=FaceCrop,algorithm=dnn,width=80,height=60"
              alt=""
            />
          </div>
        </div>
        <div>
          <button style={{ backgroundColor: "black", borderRadius: "5px" }}>
            <h2 style={{ margin: "0", color: "white" }}>FOOD</h2>
          </button>
          <div>
            <img
              width="390px"
              height="200px"
              src="https://c.ndtvimg.com/2021-08/mrgmmmio_aloo-tikki_640x480_09_August_21.jpg?downsize=290:218"
              alt=""
            />
            <h2
              style={{
                position: "relative",
                bottom: "90px",
                padding: "1%",
                color: "white",
              }}
            >
              7 Crispy Potato Snacks You Can Rustle Up For Evening Tea
            </h2>
          </div>
          <div style={{ marginTop: "-95px" }}>
            <div className={style.education}>
              <p>
                What Is The Latest Viral Trend Of 'Butter Board' - Know How To
                Make It
              </p>
              <img
                src="https://c.ndtvimg.com/2022-09/tqsjnt0o_butter-board_625x300_28_September_22.jpg?downsize=80:60"
                alt=""
              />
            </div>
            <div className={style.education}>
              <p>
                Midweek Special: How To Make Prawns Kaali Mirch In Just 15 Mins
              </p>
              <img
                src="https://c.ndtvimg.com/d39i0e9_prawns_625x300_13_July_18.jpg?downsize=80:60"
                alt=""
              />
            </div>
            <div className={style.education}>
              <p>5 Quick And Healthy Lunch Box Ideas For Kids</p>
              <img
                src="https://c.ndtvimg.com/2019-05/2rblk448_lunch-box_240x180_20_May_19.jpg?downsize=80:60"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <button style={{ backgroundColor: "black", borderRadius: "5px" }}>
            <h2 style={{ margin: "0", color: "white" }}>LIFESTYLE</h2>
          </button>
          <div className={style.education}>
            <p>
              Don't Miss These Top 8 Deals On Gorgeous Silk Sarees At Up To 70%
              Off
            </p>
            <img
              width="100px"
              height="100px"
              src="https://c.ndtvimg.com/2022-09/9v2moe4g_sarees240_120x90_28_September_22.jpg?downsize=80:60"
              alt=""
            />
          </div>
          <hr />
          <div className={style.education}>
            <p>
              Grab These Amazing Deals On Water Purifiers From Eureka, Kent And
              More
            </p>
            <img
              width="100px"
              height="100px"
              src="https://c.ndtvimg.com/2022-09/ljlk0cb_appliances240_120x90_28_September_22.jpg?downsize=80:60"
              alt=""
            />
          </div>
          <hr />
          <div className={style.education}>
            <p>
              Tamannaah Bhatia's Red Floral Saree Gives Ethnic Wear A Modern
              Touch
            </p>
            <img
              width="100px"
              height="100px"
              src="https://c.ndtvimg.com/2022-09/3afr89p8_tamannaah-bhatia_240x180_28_September_22.jpg?downsize=80:60"
              alt=""
            />
          </div>
          <hr />
          <div className={style.education}>
            <p>
              From 24K Lip Gloss To Upcycled Plastic Watches, These 7 Launches
              Are It
            </p>
            <img
              width="100px"
              height="100px"
              src="https://c.ndtvimg.com/2022-09/dvk677fg_new-launch_240x180_28_September_22.jpg?downsize=80:60"
              alt=""
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <div className={style.cswpj}>
          <div style={{ padding: "1%", paddingLeft: "25px" }}>
            <h4>CITIES</h4>
            <img
              src="https://c.ndtvimg.com/2022-10/nsu4kkvo_mapusa-police-arrests-man_120x90_02_October_22.jpg?downsize=213:160"
              alt=""
            />
            <p style={{ fontSize: "21px" }}>
              Cocaine Worth Rs 1 Lakh Recovered From Man,Arrested:Goa Police
            </p>
            <hr />
            <p>Man Killed After Part Of Building Collapses In Mumbai</p>
          </div>
          <hr />
          <div style={{ padding: "1%" }}>
            <h4>SOUTH NEWS</h4>
            <img
              src="https://c.ndtvimg.com/2022-09/o4ueopmo_paycm-protest-ndtv-240-_240x180_23_September_22.jpg?downsize=213:160"
              alt=""
            />
            <p style={{ fontSize: "21px" }}>
              Karnataka Congress Chiefs Arrest Dare To BJP Amid "PayCM" Protest
            </p>
            <hr />
            <p>
              Ex Kerala Home Minister And Left Veteran Kodiyeri Balakrishnan
              Dies At 69
            </p>
          </div>
          <hr />
          <div style={{ padding: "1%" }}>
            <h4>WORLD NEWS</h4>
            <img
              src="https://c.ndtvimg.com/2021-06/im691mg_ebrahim-raisi-240_120x90_19_June_21.jpeg?downsize=213:160"
              alt=""
            />
            <p style={{ fontSize: "21px" }}>
              Iran's President Says "Enemy Conspiracy" Has Failed
            </p>
            <hr style={{ marginTop: "45px" }} />
            <p>
              Viral Video Shows Sinkhole Swallowing A Group Of Dancing Women In
              Brazil
            </p>
          </div>
          <hr />
          <div style={{ padding: "1%" }}>
            <h4>PEOPLE</h4>
            <img
              src="https://c.ndtvimg.com/2022-09/u15up3b8_shashi-tharoor_120x90_30_September_22.jpg?downsize=213:160"
              alt=""
            />
            <p style={{ fontSize: "21px" }}>
              Shashi Tharoor: Man of Words And Surprises, Up For A Contest
            </p>
            <hr />
            <p>
              Mallikarjun Kharge Set To Be 2nd Congress Chief From Karnataka: 5
              Facts
            </p>
          </div>
          <hr />
          <div style={{ padding: "1%" }}>
            <h4>JOBS</h4>
            <img
              src="https://c.ndtvimg.com/2022-09/u15up3b8_shashi-tharoor_120x90_30_September_22.jpg?downsize=213:160"
              alt=""
            />
            <p style={{ fontSize: "21px" }}>UGC NET 2022 Exam In July,August</p>
            <hr style={{ marginTop: "68px" }} />
            <p>
              SSC To Fill About 70,000 Vacancies In Central Government
              Departments
            </p>
          </div>
          <hr />
          <div style={{ padding: "1%" }}>
            <h4>FASHION</h4>
            <img
              src="https://c.ndtvimg.com/2022-09/1fbqag8g_norayellowgown1_240x180_30_September_22.jpg?downsize=213:160"
              alt=""
            />
            <p style={{ fontSize: "21px" }}>
              Nora Fatehi's Yellow Gown Can Easily Defeat The Sun's Glimmering
              Light
            </p>
            <hr />
            <p>
              Mrunal Thakur's Fabulously Festive Fusion Look Is Here To Jazz
              Things Up
            </p>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "55px" }}>
          <button style={{ backgroundColor: "black", borderRadius: "5px" }}>
            <h2 style={{ margin: "0", color: "white" }}>CAMPAIGNS</h2>
          </button>
        </div>
        <div className={style.campaign}>
          <div className={style.campone}>
            <img
              src="https://c.ndtvimg.com/2022-10/o9u3ccv8_swasth_650x400_02_October_22.jpg?downsize=392:241"
              alt=""
            />
            <h2 style={{ marginLeft: "3%" }}>
              Live Updates From Lakshya Sampoorn Swasthya Ka 12-Hour Telethon
              With Amitabh Bachchan
            </h2>
            <hr />
            <p style={{ marginLeft: "3%" }}>
              Moving Towards A Healthier India: Biggest Game Changers In Health
              In 75 Years
            </p>
          </div>
          <div className={style.campone}>
            <img
              src="https://c.ndtvimg.com/2022-10/mvpdh0t8_swasth_650x400_02_October_22.jpg?downsize=392:241"
              alt=""
            />
            <h2 style={{ marginLeft: "3%" }}>
              Watch Live: NDTV-Dettol Banega Swasth India's Lakshya - Sampoorn
              Swasthya Ka Telethon
            </h2>
            <hr />
            <p style={{ marginLeft: "3%" }}>
              Building A Swasth India, All About Reckitt's Commitment
            </p>
          </div>
          <div className={style.campone}>
            <img
              src="https://c.ndtvimg.com/2022-10/3tqilur_swasth_650x400_02_October_22.jpg?downsize=392:241"
              alt=""
            />
            <h2 style={{ marginLeft: "3%" }}>
              Goal Is To Ensure A Holistic Healthy Life For All Indians: Amitabh
              Bachchan
            </h2>
            <hr />
            <p style={{ marginLeft: "3%" }}>
              About NDTV-Dettol Banega Swasth India Season 9: Lakshya - Sampoorn
              Swasthya Ka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
