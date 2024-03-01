import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="main-header w-100">
      <div className="main-container flex">
        <a href="#" className="logo flex flex-center"
          ><img src="https://i.ibb.co/5rnmzn7/logo.png" alt="logo"
        /></a>

        <div className="search-bar-container flex flex-center">
          <div className="search-bar flex">
            <input type="text" placeholder="Search" />
            <img src="https://svgshare.com/i/Lag.svg" alt="search-icon" />
          </div>
        </div>

     
        <nav className="main-nav-container">
          <ul className="main-nav h-100 flex flex-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Connections</a></li>
            <li><a href="#">Interest</a></li>
            <li><a href="#" style={{color: '#ec806f'}}>Try Premium</a></li>
          </ul>
        </nav>

       
        <nav className="icon-nav-container flex flex-center">
          <ul className="icon-nav h-100 flex flex-center">
            <li>
              <a href="#"
                ><img className="icon" src="https://svgshare.com/i/LZv.svg" alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img className="icon" src="https://svgshare.com/i/LaW.svg" alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img className="icon" src="https://svgshare.com/i/La9.svg" alt=""
              /></a>
            </li>
          </ul>
        </nav>


        <a href="#" className="account-photo flex flex-center"
          ><img src="https://i.ibb.co/b1pCvpM/avatar.jpg" alt="profile-picture"
        /></a>
      </div>
    </header>

   
    <header className="sub-header w-100">
      <div className="main-container flex">
        <div className="sub-nav-container">
          <ul className="sub-nav flex flex-center">
            <li><a href="#">Posts</a></li>
            <li><a href="#">Background</a></li>
            <li><a href="#">Recommendations</a></li>
            <li><a href="#">Following</a></li>
          </ul>
        </div>
      </div>
    </header>

    
    <div className="page-content main-container flex">
      
      <aside className="left-aside h-100 flex flex-center blue-border">
        <div className="profile-info p-20 w-100">
          <a href="#">
            <img
              src="https://i.ibb.co/DRndJ5f/bill-gates-avatar.png"
              alt="bill-gates-photo"
              className="profile-photo"
            />
          </a>
          <h2 className="user-name">Bill Gates</h2>
          <h4 className="job-description">Microsoft Founder</h4>
          <p className="user-location">Greater Seattle Area</p>
          <button className="btn-form w-100 btn-full">
            Follow</button
          ><br />
          <button className="btn-form w-100 btn-outline flex flex-center">
            Connect<img src="https://svgshare.com/i/LXp.svg" alt="" />
          </button>
        </div>

        <div className="profile-stats flex w-100">
          <div className="connection-amount p-20">
            <p className="social-stats flex">200<span>connections</span></p>
          </div>
          <div className="follower-amount p-20">
            <p className="social-stats flex">1.9M<span>followers</span></p>
          </div>
        </div>

        <div className="profile-links p-20 w-100">
          <div className="link">
            <img src="https://svgshare.com/i/L_o.svg" className="icon" />
            <a href="#">linkedin.com/in/billgates</a>
          </div>
          <div className="link">
            <img src="https://svgshare.com/i/L_z.svg" className="icon" />
            <a href="#">billgates.com</a>
          </div>
        </div>

        <div className="profile-export p-20 w-100">
          <div className="link">
            <img src="https://svgshare.com/i/LaX.svg" className="icon" />
            <a href="#">Export page as PDF</a>
          </div>
        </div>
      </aside>

      
      <div className="main-content center-section h-100">
        
        <section className="posts w-100 blue-border">
          <div className="section-title-container flex flex-center p-20">
            <h4 className="section-title">Posts</h4>
            <div className="previous-next-selector flex">
              <button className="btn-circle-blue flex">
                <img src="https://svgshare.com/i/LaK.svg" alt="" />
              </button>
              <button className="btn-circle-blue flex">
                <img src="https://svgshare.com/i/La0.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="post-grid h-100 p-20">
            <div className="post">
              <a href="#">
                <img
                  className="post-photo w-100"
                  src="https://i.ibb.co/bdDKgmb/article1.jpg"
                />
              </a>
              <a href="#">
                <p className="post-title">3 myths that confuse top-managers</p>
              </a>
              <p className="post-date">April 19, 2020</p>
            </div>
            <div className="post">
              <a href="#">
                <img
                  className="post-photo w-100"
                  src="https://i.ibb.co/XtpdjDV/article2.jpg"
                />
              </a>
              <a href="#">
                <p className="post-title">How much do we spend on hot drinks</p>
              </a>
              <p className="post-date">April 19, 2020</p>
            </div>
            <div className="post">
              <a href="#">
                <img
                  className="post-photo w-100"
                  src="https://i.ibb.co/W62XCpy/article3.jpg"
                />
              </a>
              <a href="#">
                <p className="post-title">Good news you might have noticed</p>
              </a>
              <p className="post-date">April 19, 2020</p>
            </div>
          </div>
        </section>

        <section className="background blue-border">
          <div className="section-title-container flex flex-center p-20">
            <h4 className="section-title">Background</h4>
          </div>

          <div className="background-grid p-20">
            <div className="summary background-content-row">
              <div className="background-row-title flex">
                <img src="https://svgshare.com/i/L_y.svg" />
                <h3>Summary</h3>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolores, quos quisquam laudantium, nisi impedit ipsa odio amet
                rem odit ipsam praesentium nemo placeat! Odio explicabo
                repudiandae voluptatibus magnam quasi tempore dolor soluta?
                Tempore minima sapiente vel nisi praesentium blanditiis magnam.
              </p>
            </div>

          
            <div className="experience background-content-row">
              <div className="background-row-title flex">
                <img src="https://svgshare.com/i/LaA.svg" />
                <h3>Experience</h3>
              </div>

              <div className="position-entity flex">
                <div className="position-data">
                  <p className="position-timeline">2000 - Present</p>
                  <p className="company-position">Co-Founder, Chairman</p>
                  <a href="#">Microsoft</a>
                </div>
                <img src="https://i.ibb.co/mRGfjdn/logo-microsoft.png" />
              </div>
              <div className="position-entity flex">
                <div className="position-data">
                  <p className="position-timeline">1992-1975</p>
                  <p className="company-position">Senior Developer</p>
                  <a href="#">Youtube</a>
                </div>
                <img src="https://i.ibb.co/34ymfNp/logo-youtube.png" />
              </div>
            </div>

           
            <div className="education background-content-row">
              <div className="background-row-title flex">
                <img src="https://svgshare.com/i/LZn.svg" />
                <h3>Education</h3>
              </div>

              <div className="education-entity flex">
                <div className="education-data">
                  <p className="education-timeline">1973 - 1975</p>
                  <p className="school">Harvard University</p>
                  <a href="#">BS Computer Science</a>
                </div>
              </div>
              <div className="education-entity flex">
                <div className="education-data">
                  <p className="education-timeline">1960 - 1973</p>
                  <p className="school">Lakeside School, Seattle</p>
                </div>
              </div>
            </div>

            
            <div className="skills background-content-row">
              <div className="background-row-title flex">
                <img
                  style={{transform: "rotate(180deg)"}}
                  src="https://svgshare.com/i/Las.svg"
                />
                <h3>Skills</h3>
              </div>

              <div className="skills-content">
                <div className="skill-row flex">
                  <div className="skill flex flex-center">
                    <p className="endorsement-amount">74</p>
                    <p>Social Media Marketing</p>
                  </div>
                  <div className="users-endorsements flex flex-center">
                    <a href="#" className="account-photo flex flex-center"
                      ><img
                        src="https://i.ibb.co/1J748kM/avatar3.jpg"
                        alt="profile-picture"
                    /></a>
                    <a href="#" className="account-photo flex flex-center"
                      ><img
                        src="https://i.ibb.co/b1pCvpM/avatar.jpg"
                        alt="profile-picture"
                    /></a>
                    <a href="#" className="account-photo flex flex-center"
                      ><img
                        src="https://i.ibb.co/J7sSDVc/avatar2.jpg"
                        alt="profile-picture"
                    /></a>
                    <button className="endorsement-btn">71+</button>
                  </div>
                </div>

                <div className="skill-row flex">
                  <div className="skill flex flex-center">
                    <p className="endorsement-amount">67</p>
                    <p>Web Development</p>
                  </div>
                  <div className="users-endorsements flex flex-center">
                    <a href="#" className="account-photo flex flex-center"
                      ><img
                        src="https://i.ibb.co/J7sSDVc/avatar2.jpg"
                        alt="profile-picture"
                    /></a>
                    <a href="#" className="account-photo flex flex-center"
                      ><img
                        src="https://i.ibb.co/1J748kM/avatar3.jpg"
                        alt="profile-picture"
                    /></a>
                    <a href="#" className="account-photo flex flex-center"
                      ><img
                        src="https://i.ibb.co/b1pCvpM/avatar.jpg"
                        alt="profile-picture"
                    /></a>
                    <button className="endorsement-btn">64+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="interests background-content-row">
              <div className="background-row-title flex">
                <img src="https://svgshare.com/i/LaY.svg" />
                <h3>Interests</h3>
              </div>

              <div className="interests-tag flex">
                <p className="tag">Wireless Industry</p>
                <p className="tag">Photography</p>
                <p className="tag">Web Design</p>
                <p className="tag">Technology</p>
              </div>
            </div>
          </div>
        </section>

        <section className="recomendations blue-border">
          <div className="section-title-container flex flex-center p-20">
            <h4 className="section-title">Recomendations</h4>
            <div className="previous-next-selector flex">
              <button className="btn-circle-blue flex">
                <img src="https://svgshare.com/i/LaK.svg" alt="" />
              </button>
              <button className="btn-circle-blue flex">
                <img src="https://svgshare.com/i/La0.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="recomendation-grid h-100 p-20">
            <div className="testimonial w-100">
              <p className="testimonial-text p-20">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt, odio. Qui eveniet soluta nisi dolorum? Molestias at
                fugiat magni suscipit?
              </p>
              <div className="profile">
                <a href="#" className="account-photo flex flex-center"
                  ><img
                    src="https://i.ibb.co/b1pCvpM/avatar.jpg"
                    alt="profile-picture"
                /></a>
                <p className="profile-name">
                  Sergey Brin <br /><span>Google</span>
                </p>
              </div>
            </div>
            <div className="testimonial w-100">
              <p className="testimonial-text p-20">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt, odio. Qui eveniet soluta nisi dolorum? Molestias at
                fugiat magni suscipit?
              </p>
              <div className="profile">
                <a href="#" className="account-photo flex flex-center"
                  ><img
                    src="https://i.ibb.co/J7sSDVc/avatar2.jpg"
                    alt="profile-picture"
                /></a>
                <p className="profile-name">
                  Jeffrey Bezos <br /><span>Amazon</span>
                </p>
              </div>
            </div>
            <div className="testimonial w-100">
              <p className="testimonial-text p-20">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt, odio. Qui eveniet soluta nisi dolorum? Molestias at
                fugiat magni suscipit?
              </p>
              <div className="profile">
                <a href="#" className="account-photo flex flex-center"
                  ><img
                    src="https://i.ibb.co/1J748kM/avatar3.jpg"
                    alt="profile-picture"
                /></a>
                <p className="profile-name">Steve Jobs <br /><span>Apple</span></p>
              </div>
            </div>
          </div>
        </section>

        <section className="following blue-border">
          <div className="section-title-container flex flex-center p-20">
            <h4 className="section-title">Following</h4>
          </div>

          <div className="following-grid h-100 p-20">
            <div className="suggestion w-100">
              <a href="#" className="flex flex-center p-20">
                <img
                  className="suggestion-photo w-100"
                  src="https://i.ibb.co/mRGfjdn/logo-microsoft.png"
                />
              </a>
              <p>Microsoft</p>
              <div className="suggestion-btn flex flex-center">
                <button className="btn-circle-blue flex">
                  <img src="https://svgshare.com/i/La8.svg" alt="" />
                </button>
                <a href="#" className="follow-btn">Follow</a>
              </div>
            </div>
            <div className="suggestion w-100">
              <a href="#" className="flex flex-center p-20">
                <img
                  className="suggestion-photo w-100"
                  src="https://i.ibb.co/cyvPXc7/logo-amazon.jpg"
                />
              </a>
              <p>Amazon</p>
              <div className="suggestion-btn flex flex-center">
                <button className="btn-circle-blue flex">
                  <img src="https://svgshare.com/i/La8.svg" alt="" />
                </button>
                <a href="#" className="follow-btn">Follow</a>
              </div>
            </div>
            <div className="suggestion w-100">
              <a href="#" className="flex flex-center p-20">
                <img
                  className="suggestion-photo w-100"
                  src="https://i.ibb.co/34ymfNp/logo-youtube.png"
                />
              </a>
              <p>Youtube</p>
              <div className="suggestion-btn flex flex-center">
                <button className="btn-circle-blue flex">
                  <img src="https://svgshare.com/i/La8.svg" alt="" />
                </button>
                <a href="#" className="follow-btn">Follow</a>
              </div>
            </div>
            <button className="btn-form w-100 btn-outline">
              See all (20)
            </button>
          </div>
        </section>
      </div>


      <aside className="right-aside h-100 flex">
        <div className="viewed-profiles">
          <h2 className="right-aside-title">People Also Viewed</h2>

          <div className="profile flex">
            <a href="#" className="account-photo flex flex-center"
              ><img
                src="https://i.ibb.co/b1pCvpM/avatar.jpg"
                alt="profile-picture"
            /></a>
            <p className="profile-name">Sergey Brin <br /><span>Google</span></p>
          </div>

          <div className="profile flex">
            <a href="#" className="account-photo flex flex-center"
              ><img
                src="https://i.ibb.co/J7sSDVc/avatar2.jpg"
                alt="profile-picture"
            /></a>
            <p className="profile-name">Jeffrey Bezos <br /><span>Amazon</span></p>
          </div>

          <div className="profile flex">
            <a href="#" className="account-photo flex flex-center"
              ><img
                src="https://i.ibb.co/1J748kM/avatar3.jpg"
                alt="profile-picture"
            /></a>
            <p className="profile-name">Steve Jobs <br /><span>Apple</span></p>
          </div>
        </div>

        <div className="influencers">
          <h2 className="right-aside-title">More Influencers</h2>
          <div className="flex flex-center">
            <a href="#">
              <img src="https://svgshare.com/i/LaK.svg" />
            </a>
            <a href="#">
              <img
                src="https://i.ibb.co/1J748kM/avatar3.jpg"
                className="profile-photo"
              />
            </a>
            <a href="#">
              <img src="https://svgshare.com/i/La0.svg" />
            </a>
          </div>
          <p className="profile-name">Steve Jobs <br /><span>Apple</span></p>
        </div>
      </aside>
    </div>

    
    <footer className="footer w-100">
      <p className="footer-text p-20">LinkedIn Corporation &copy; 2020</p>
    </footer>
    </main>
  );
}
