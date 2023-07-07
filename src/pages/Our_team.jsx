import React from "react";
import photo from "../asset/photo.jpg";
import N from "../asset/N.jpg";
import Y from "../asset/Y.jpg";
import I from "../asset/In.jpg";
import "./Our_Team.css";

function ourteam() {
  let message = `I used to think my brain was the most important organ in my body, \n until I realized who was telling me that.`;
  return (
    <>
      <div className="ourteam">
        <div className="ourteamTitles">
          <span className="ourteamTitleLg">Our Team</span>
        </div>
        <img className="ourteamImg" src={photo} alt="" />
      </div>

      <div className="team">
        <h1>The Team Behind MindCare</h1>
        <p>{message}</p>
        <hr/>
      </div>

      <section class="section-white">
        <div class="container">
          <div class="row">
            {/* <div class="col-md-12 text-center">
              <h2 class="section-title">The Team Behind MindCare</h2>

              <p class="section-subtitle">{message}</p>
            </div> */}

            <div class="col-sm-6 col-md-4">
              <div class="team-item">
                <img src={Y} class="team-img" alt="pic" />
                <h3>Yoseph Zewdu</h3>
                <div class="team-info">
                  <p>Lead in MindCare</p>
                </div>
                <p>
                  Yoseph is a passionate and driven backend developer with
                  expertise in Python, Node Js, and PHP. Yoseph is skilled in
                  designing and implementing complex databases, APIs, and
                  server-side applications and has a keen eye for detail.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-md-4">
              <div class="team-item">
                <img src={I} class="team-img" alt="pic" />

                <h3>Inas Wendem</h3>

                <div class="team-info">
                  <p>Front-end Developer</p>
                </div>

                <p>
                  Inas is a detail-oriented front-end developer with a passion
                  for user experience and design. Inas has experience working
                  with front-end framework such as React ,and is passionate
                  about creating clean and intuitive user interfaces.
                </p>

                {/* <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                          
                      </ul> */}
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="team-item">
                <img src={N} class="team-img" alt="pic" />

                <h3>Nebiyou Elias</h3>

                <div class="team-info">
                  <p>Lead in other aspects of his life</p>
                </div>

                <p>
                  Nebil is a dedicated and motivated front-end developer with
                  expertise in HTML, CSS, and JavaScript. Nebil has experience
                  working with front-end framework such as React , and he enjoys
                  creating responsive and intuitive user interfaces.
                </p>

                {/* <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
                          <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
                          <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
                          <li><a href="#" class="dribble">
                            <i class="fa fa-dribbble"></i>
                        </a></li>
                          
                      </ul>
                       */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ourteam;
