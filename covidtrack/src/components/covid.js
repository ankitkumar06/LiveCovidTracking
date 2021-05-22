import React, { useEffect, useState } from 'react'
import './covid.css';


const Covid = () => {

    const [file, setFile] = useState([]);
    const getCovidData = async () =>{
        try{ 
       const res = await fetch("https://api.covid19india.org/data.json");

       const data = await res.json();
       console.log(data.statewise[0]);
       setFile(data.statewise[0]);
    }catch(err){
        console.log(err);
    }
}
     
    useEffect(() => {
            getCovidData();
    }, []);

    return (
        <div>
            <section>
          <h1><p> </p> LIVE </h1>
         <h2><span>COVID-19</span> CORONAVIRUS TRACKER </h2>

          <ul>
              <div className="card_main">
              <li className="card">
                  {/* <div className="card_main"> */}
                      <div className="card_inner">
                          <p className="card_name"> <sub>OUR</sub> COUNTRY</p>
                          <p className="card_total card_small">INDIA</p>
                      </div>
                  {/* </div> */}

              </li>
              <li className="card">
                  {/* <div className="card_main"> */}
                      <div className="card_inner">
                          <p className="card_name"> <sub>TOTAL</sub> RECOVERED</p>
                          <p className="card_total card_small">{file.recovered}</p>
                      </div>
                  {/* </div> */}

              </li>
              <li className="card">
                  {/* <div className="card_main"> */}
                      <div className="card_inner">
                          <p className="card_name"> <sub>TOTAL</sub> CONFIRMED</p>
                          <p className="card_total card_small">{file.confirmed}</p>
                      </div>
                  {/* </div> */}

              </li>
              <li className="card">
                  {/* <div className="card_main"> */}
                      <div className="card_inner">
                          <p className="card_name"> <sub>TOTAL</sub> DEATHS</p>
                          <p className="card_total card_small">{file.deaths}</p>
                      </div>
                  {/* </div> */}

              </li>
              <li className="card">
                  {/* <div className="card_main"> */}
                      <div className="card_inner">
                          <p className="card_name"> <sub>TOTAL</sub> ACTIVE</p>
                          <p className="card_total card_small">{file.active}</p>
                      </div>
                  {/* </div> */}

              </li>
              <li className="card">
                  {/* <div className="card_main"> */}
                      <div className="card_inner">
                          <p className="card_name"> <sub>LAST</sub> UPDATED</p>
                          <p className="card_total card_big">{file.lastupdatedtime}</p>
                      </div>
                  {/* </div> */}

              </li>
              </div>
          </ul>
          </section>
         <div>
         <footer>&copy; Copyright 2021 <span>    Author  : Ankit kumar</span></footer>
         </div>
          

        </div>
        
        
    )
}

export default Covid;