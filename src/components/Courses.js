import React from "react";
import courseone from "../images/photoshop.png";
import coursetwo from "../images/html-logo.png";
import coursethree from "../images/inDesign-Logo.png";
import coursefour from "../images/swift-logo.png";

function Courses() {
  return (
    <div className="Courses">
      <h3 className="center-align">Courses</h3>
      <div className="carousel carousel-slider">
        <a className="carousel-item black-text" href="#!">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={courseone} alt="photoshop" />
            </div>
            <div className="card-content">
              <h6>Course 1: Adobe Photoshop</h6>
              <p className="light">Adobe Photoshop is an extremely powerful application that's used by many... <span id="UnderlineText" class="activator">read more</span></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Course: Adobe Photoshop<i class="material-icons right">close</i></span>
              <p className="light">Adobe Photoshop is an extremely powerful application that's used by many professional photographers and designers. You can use Photoshop or almost any kind of image editing, such as touching up photos, creating high-quality graphics, and much, much more</p>
            </div>
          </div>
        </a>

        <a className="carousel-item black-text" href="#!">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={coursetwo} alt="html5" />
            </div>
            <div className="card-content">
              <h6>Course 2: Creating websites with HTML5</h6>
              <p className="light">HTML5 is a markup language used for structuring and presenting content... <span id="UnderlineText" class="activator">read more</span></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Course: Creating websites with HTML5<i class="material-icons right">close</i></span>
              <p className="light">HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth  and current major version of the HTML standard.</p>
            </div>
          </div>
        </a>
        
        <a className="carousel-item black-text" href="#!">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={coursethree} alt="html5" />
            </div>
            <div className="card-content">
              <h6>Course 3: Adobe InDesign</h6>
              <p className="light">Adobe InDesign is a desktop publishing software application... <span id="UnderlineText" class="activator">read more</span></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Course: Adobe InDesign<i class="material-icons right">close</i></span>
              <p className="light">Adobe InDesign is a desktop publishing software application produced by Adobe Systems. It can be used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books and eBooks.</p>
            </div>
          </div>
        </a>

        <a className="carousel-item black-text" href="#!">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={coursefour} alt="html5" />
            </div>
            <div className="card-content">
              <h6>Course 4: Swift Programming</h6>
              <p className="light">Swift is a powerful and intuitive programming language for macOS, iOS, watchOS... <span id="UnderlineText" class="activator">read more</span></p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Course: Swift Programming<i class="material-icons right">close</i></span>
              <p className="light">Swift is a powerful and intuitive programming language for macOS, iOS, watchOS and tvOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Courses;