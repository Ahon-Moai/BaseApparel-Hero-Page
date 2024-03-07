import React from "react";
import Logo from "../images/logo.svg";
import Heros from "../images/hero-desktop.jpg";
function Nav() {
  return (
    <>
      <div className="App">
        <div className="Image">
          <img src={Logo}></img>
        </div>
        <div className="Title">
          <h1 className="title">
            <span className="were">WE'RE</span> COMING SOON
          </h1>
          <div className="title-para">
            Hello fellow shoppers! We're currently building out new fashion
            store. Add your email below to stay up-to-date with announcements
            and out launch deals.
          </div>

          <div className="InputField">
            <form className="Form">
              <input
                className="inputfield"
                type="text"
                name="InputField"
                value="Email Address"
              ></input>
              <button className="btn">+</button>
            </form>
          </div>
        </div>
      </div>
      <div className="Img-Section">
        <img className="image" src={Heros} alt="PIC"></img>
      </div>
    </>
  );
}

export default Nav;
