import React from "react";

const Gallery = () => {
  return (
    <>
      <section id="gallery" className="p-3">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h5 className="display-4">
                <span className="text-teal">Photo</span> Gallery
              </h5>
              <p className="lead">
                Our best Resorts Photos with there on point ambience. Welcome
                All.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src="images/21212.jpg" className=" z-depth-1 img-fluid" />

              {/* <img src="images/gallery_1.jpg" className="img-fluid" alt=""> */}
            </div>
            <div className="col-md-3">
              <img src="images/2121.jpg" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_2.jpg" className="img-fluid" alt=""> */}
            </div>
            <div className="col-md-3">
              <img src="images/21.jpg" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_3.jpg" className="img-fluid" alt=""> */}
            </div>
            <div className="col-md-3">
              <img src="images/212121.jpg" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_4.jpg" className="img-fluid" alt=""> */}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <img src="images/12345.jpg" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_5.jpg" className="img-fluid" alt=""> */}
            </div>
            <div className="col-md-3">
              <img src="images/1234.jpg" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_6.jpg" className="img-fluid" alt=""> */}
            </div>
            <div className="col-md-3">
              <img src="images/123.jpg" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_7.jpg" className="img-fluid" alt=""> */}
            </div>
            <div className="col-md-3">
              <img src="images/12.jpg" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_8.jpg" className="img-fluid" alt=""> */}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <img src="images/images12.jpg" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_9.jpg" className="img-fluid" alt=""> */}
            </div>
            <div className="col-md-3">
              <img src="images/kenya.jpg" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_10.jpg" className="img-fluid" alt=""> */}
            </div>
            <div className="col-md-3">
              <img src="images/medina.webp" className="z-depth-1 img-fluid" />
              {/* <img src="images/gallery_11.jpg" className="img-fluid" alt=""> */}
            </div>
            <div className="col-md-3">
              <img src="images/212.jpg" className="img-fluid h-80" alt="" />
              {/* <img src="images/gallery_12.jpg" className="img-fluid" alt=""> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
