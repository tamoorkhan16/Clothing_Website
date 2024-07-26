import React from "react";

function NavigationBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <h3>AINOOR</h3>
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <a href="">
              <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
            <li>
              <a href="">
              <i className="fa-solid fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
