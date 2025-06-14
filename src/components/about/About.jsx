import aboutImg1 from "../../assets/about-1.jpg";
import aboutImg2 from "../../assets/about-2.jpg";
import ScrollLink from "../link/ScrollLink";
import { FaCircleArrowRight } from "react-icons/fa6";
import SectionTitle from "../title/SectionTitle";

import "./about.css";

const About = () => {
  return (
    <section className="about section">
      <div className="about-container container grid">
        <div className="about-shape grid">
          <img src={aboutImg1} alt="" className="about-img" />

          <div className="about-experience">
            <h3 className="about-no">30+</h3>
            <span className="about-details">Years of Experience</span>
          </div>

          <img src={aboutImg2} alt="" className="about-img" />
        </div>

        <div className="about-content">
          <SectionTitle
            subtitle="About Us"
            title={
              <>
                We Are Always <span>Here To Serve</span> You Fresh Food
              </>
            }
          />

          <p className="about-description">
            Little Lemon Chicago is a family-owned Mediterranean restaurant in
            the heart of the city, run by brothers Mario and Adrian. Inspired by
            their Mediterranean upbringing, they serve traditional recipes with
            a modern twist. The menu features classic dishes reimagined to stand
            out, whether you’re grabbing a quick lunch or enjoying a relaxing
            dinner. Little Lemon offers a cozy, welcoming spot to savor
            delicious food.
          </p>

          <div className="about-data grid">
            <div className="about-item">
              <div>
                <h3 className="about-title">Best Quality Food</h3>
                <p className="about-data-description">
                  We use only fresh, hand-picked ingredients.
                </p>
              </div>
            </div>

            <div className="about-item">

              <div>
                <h3 className="about-title">Delicious Food</h3>
                <p className="about-data-description">
                  Every bite is crafted with authentic flavors.
                </p>
              </div>
            </div>
          </div>

          <ScrollLink
            to="menu"
            name="Check Menu"
            className="button"
            icon={<FaCircleArrowRight className="button-icon" />}
          />
        </div>
      </div>
    </section>
  );
};
export default About;
