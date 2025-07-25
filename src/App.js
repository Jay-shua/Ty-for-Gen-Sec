import "./App.css";
import ty_image from "./ty-removebg.png";
import ty_image_mobile from "./ty_image_mobile-removebg.png";

import nice from "./nice-removebg-preview.png";
import unilag from "./unilag-go.png";
import { FaStar } from "react-icons/fa";


function App() {

  return (
    <>
      {/* Desktop View */}
      <div className="App">
        <div className="image">
          <img src={ty_image} alt="" />
        </div>
        <div className="show_forth">
          <div>
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
          </div>
          <hr />
        </div>
        <div className="foreground">
          <div className="better_future  Left">
            <p className="for_a">FOR A</p>
            <div className="stand_out">
              <p>BETTER</p> <p>FUTURE</p>
            </div>
          </div>
          <div className="tomiwa Right">
            <div className="vote">VOTE</div>
            <div className="post_going_for">
              <p className="name">OLATOMIWA</p>
              <p className="postion">FOR GENERAL SECRETARY</p>
            </div>
            <div className="short_desc">
              I am committed to clear communication, accurate documentation, and
              smooth coordination within CESS. Elect me as General Secretary —
              for structure, service, and student-centered leadership.
            </div>
            <div className="cta">
              <div className="button">
                <a href="https://chat.whatsapp.com/ICGmDh3bpUeJh37yD7ixj3?mode=r_t">
                  Join the Movement
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="show_forth_1">
          <hr />
          <div>
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
            <FaStar color="#1d3501" size={15} />
          </div>
        </div>
      </div>

      {/* Mobile and Tablet View */}
      <div className="mobile">
        <div className="logo-images">
          <img src={nice} alt="" />
          <img src={unilag} alt="" />
        </div>
        <div className="better_future_mobile montserrat">
          <p className="for_a_better_future ">FOR A BETTER FUTURE</p>
          <p>
            LET'S VOTE OLATOMIWA ATORO - TYWO AS THE GENERAL SECRETARY OF THE
            CIVIL ENGINEERING STUDENT SOCIETY
          </p>
        </div>
        <div className="post_going_for phone">
          <p className="name">OLATOMIWA</p>
          <p className="postion">FOR GENERAL SECRETARY</p>
        </div>
        <div className="foreground_mobile">
          <img src={ty_image_mobile} alt="" />

          <div className="description">
            <div>
              {/* <div className="vote">VOTE</div> */}
              <div className="post_going_for tablet">
                <p className="name">OLATOMIWA</p>
                <p className="postion">FOR GENERAL SECRETARY</p>
              </div>
            </div>
            <div className="short_desc">
              <p className="apos">"</p>
              <p>
                I am committed to clear communication, accurate documentation,
                and smooth coordination within CESS. Elect me as General
                Secretary — for structure, service, and student-centered
                leadership.
              </p>
              <p className="apos">"</p>
            </div>
            <div className="button tablet">
              <a href="https://chat.whatsapp.com/ICGmDh3bpUeJh37yD7ixj3?mode=r_t">
                JOIN THE MOVEMENT
              </a>
            </div>
          </div>
        </div>
         <div className="button phone">
              <a href="https://chat.whatsapp.com/ICGmDh3bpUeJh37yD7ixj3?mode=r_t">
                JOIN THE MOVEMENT
              </a>
            </div>
      </div>
    </>
  );
}

export default App;
