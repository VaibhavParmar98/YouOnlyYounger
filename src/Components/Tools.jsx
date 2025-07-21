import React from 'react';


const Tools = () => {
  return (
    <div>
      <main>
        <section className="tools-therapies">
          <div className="container">
            <div className="section-title p-4 text-center">
              <h2>Tools & Therapies We Use</h2>
              <p>
                To restore and rebalance your Physical Body, we use a
                combination of advanced diagnostics and natural therapies. <br />
                These methods work together to support healing, reduce symptoms,
                and strengthen your body's core systems.
              </p>
            </div>

            <div className="row clearfix mt-2">
              {/* Left Cards */}
              <div className="col-xl-3">
                <div className="card-col text-end">
                  <div className="therapy-card therapy-card-left stagger-1" data-num="1">
                    <h5>Functional Testing</h5>
                    <p>
                      We use detailed lab panels to uncover hidden imbalances in your gut,
                      hormones, nutrients, and overall body systems.
                    </p>
                  </div>
                  <div className="therapy-card therapy-card-left stagger-2" data-num="6">
                    <h5>Movement Rehab</h5>
                    <p>
                      Personalized movement, stretching, and recovery plans that restore strength,
                      flexibility, and physical comfort over time.
                    </p>
                  </div>
                  <div className="therapy-card therapy-card-left stagger-3" data-num="5">
                    <h5>Gentle Detox</h5>
                    <p>
                      Safe, non-invasive methods to clear toxins, reduce inflammation, and enhance
                      your body’s natural cleansing abilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Orbit Center */}
              <div className="col-xl-6 d-flex align-items-center position-relative responsive-fixed-height">
                <div className="row clearfix mt-5">
                  <div className="col-12">
                    <div className="orbit">
                      <ul className="orbit-wrap">
                        <li className="orbit-center">
                          <i className="orbit-center__icon fa fa-code"></i>
                        </li>

                        <li>
                          <ul className="ring-1">
                            <li><i className="orbit-icon fa fa-podcast"></i></li>
                            <li><i className="orbit-icon fa fa-css3"></i></li>
                            <li><i className="orbit-icon fa fa-html5"></i></li>
                          </ul>
                        </li>

                        <li>
                          <ul className="ring-2">
                            <li><i className="orbit-icon fa fa-windows"></i></li>
                            <li><i className="orbit-icon fa fa-safari"></i></li>
                            <li><i className="orbit-icon fa fa-edge"></i></li>
                            <li><i className="orbit-icon fa fa-linux"></i></li>
                            <li><i className="orbit-icon fa fa-apple"></i></li>
                            <li><i className="orbit-icon fa fa-chrome"></i></li>
                            <li><i className="orbit-icon fa fa-android"></i></li>
                            <li><i className="orbit-icon fa fa-firefox"></i></li>
                          </ul>
                        </li>

                        <li>
                          <ul className="ring-3">
                            <li><i className="orbit-icon fa fa-coffee"></i></li>
                            <li><i className="orbit-icon fa fa-terminal"></i></li>
                            <li><i className="orbit-icon fa fa-heart-o"></i></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Cards */}
              <div className="col-xl-3">
                <div className="card-col text-start">
                  <div className="therapy-card therapy-card-right stagger-1" data-num="2">
                    <h5>Targeted Nutrition</h5>
                    <p>
                      Customized food and supplement plans designed to support healing, reduce
                      inflammation, and nourish your body from within.
                    </p>
                  </div>
                  <div className="therapy-card therapy-card-right stagger-2" data-num="3">
                    <h5>IV Therapy</h5>
                    <p>
                      Fast-acting vitamin infusions to boost immunity, energy, hydration, and
                      recovery at a deep cellular level.
                    </p>
                  </div>
                  <div className="therapy-card therapy-card-right stagger-3" data-num="4">
                    <h5>Hormone Support</h5>
                    <p>
                      Natural protocols to balance thyroid, cortisol, and reproductive hormones
                      for better mood, metabolism, and vitality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="d-flex justify-content-center w-100">
                <button className="btn btn-light mt-5 rounded-pill col-md-2 col-12">
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tools;
