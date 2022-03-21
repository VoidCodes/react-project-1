import React from "react";

function Main() {
  return (
    <main>
      <div className="mainSection">
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center teal-text text-lighten-3">
                <i className="material-icons">account_balance</i>
              </h2>
              <h5 className="center">Recognition for graduates</h5>
              <p className="light">
              Once our students graduate from our courses, they will get 
              a certificate of completion. This certificate will be issued 
              by our company and will be given to the students to show them
              that they have successfully completed the course.
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center teal-text text-lighten-3">
                <i className="material-icons">group</i>
              </h2>
              <h5 className="center">User Experience Focused</h5>
              <p className="light">
              Our company is very heavily based off user feedback so we can 
              continuosuly improve our products and service to better serve
              our customers and users which is what we do best here at Innova
              Training Center.
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center teal-text text-lighten-3">
                <i className="material-icons">settings</i>
              </h2>
              <h5 className="center">Easy to work with</h5>
              <p className="light">
              Our students are very happy to train with us as we are a team 
              of highly skilled individuals who are always willing to help out
              with any questions they may have about the courses they are taking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;