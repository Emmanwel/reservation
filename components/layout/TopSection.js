import React from "react";
import capture from "../../assets/capture.png";
import ker from "../../assets/ker.jpg";
import ed from "../../assets/ed.jpg";
import Image from "next/image";

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
                <Image
                  src={capture}
                  //src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </div>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Emmanuel Mukhebi
              </h4>
              <h6 className="font-weight-bold blue-text my-3 text-uppercase text-info">
                Local
              </h6>
              <p className="font-weight-normal dark-grey-text">
                In terms of importance when planning a holiday. It was One of
                the best. probably goes beyond the need and preference of the
                average travel.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial mb-5">
              <div className="avatar mx-auto">
                <Image
                  src={ed}
                  //src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                  className="rounded-circle z-depth-3 img-fluid"
                />
              </div>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Lyton Nelly
              </h4>
              <h6 className="font-weight-bold blue-text my-3 text-uppercase text-info">
                Tourist
              </h6>
              <p className="font-weight-normal dark-grey-text">
                The Resort demonstrated an high affinity for technology, with
                overly sophisticated in-room options with abundance of
                entertainment.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial mb-5">
              <div className="avatar mx-auto">
                <Image
                  src={ker}
                  //src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                />
              </div>
              <h4 className="font-weight-bold dark-grey-text mt-4">
                Collete Opiyo
              </h4>
              <h6 className="font-weight-bold blue-text my-3 text-uppercase text-info">
                Visitor{" "}
              </h6>
              <p className="font-weight-normal dark-grey-text">
                The resorts offered offered stress relieving environemnt that
                made it comendable for the good conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
