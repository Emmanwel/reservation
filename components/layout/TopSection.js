import React from "react";

const TopSection = () => {
  return (
    <section className="bg-light mt-5" id="tourist">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 mb-4">
            <h3 className="text-center mt-4 text-secondary">
              Our Customers Opinions
            </h3>
          </div>
          <div className="col-md-4">
            <div className="testimonial mb-5">
              <div className="avatar mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </div>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Lyn Ogana
              </h4>
              <h6 className="font-weight-bold blue-text my-3">Tourist</h6>
              <p className="font-weight-normal dark-grey-text">
                In terms of importance when planning a holiday. It was One of
                the best. probably go beyond the need and preference of the
                average travele
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial mb-5">
              <div className="avatar mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </div>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Lyton John
              </h4>
              <h6 className="font-weight-bold blue-text my-3">Tourist</h6>
              <p className="font-weight-normal dark-grey-text">
                Not exactly! The Resort demonstrated an affinity with
                technology, but overly sophisticated in-room options and an
                abundance of entertainment.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial mb-5">
              <div className="avatar mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </div>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Maria Kate
              </h4>
              <h6 className="font-weight-bold blue-text my-3">Toursit</h6>
              <p className="font-weight-normal dark-grey-text">
                The resorts offer both removing the stresses of everyday life
                and offering the chance to truly recharge batteries in new
                surroundings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
