import { featureItem } from "../../Data";

import "./features.css";

const Features = () => {
  return (
    <section className="features section">
      <div className="features-container container grid">
        {featureItem.map(({ id, title, description }) => {
          return (
            <article className="features-item" key={id}>
              <h3 className="features-title">{title}</h3>
              <p className="features-description">{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Features;
