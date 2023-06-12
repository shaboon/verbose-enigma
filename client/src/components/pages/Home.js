import React from "react";
import SEO from "../../images/search-engine-optimization.jpg";
import ORM from "../../images/online-reputation-management.jpg";
import SMM from "../../images/social-media-marketing.jpg";
import LG from "../../images/lead-generation.png";
import BR from "../../images/brand-awareness.png";
import CM from "../../images/cost-management.png";

export default function Home() {
  return (
    <div>
      <section
        className="hero"
        src="../images/digital-marketing-meeting.jpg"
        alt="Team of SEO specialists"
      ></section>
      <main className="content">
        <article id="search-engine-optimization" className="child">
          <img
            src={SEO}
            className="float-left"
            alt="Search engine optimization jpg"
          />
          <h2>Search Engine Optimization</h2>
          <p>
            The dominance of mobile internet use means that users are searching
            for the right business as they travel, shop, or sit on their couch
            at home. Search Engine Optimization (SEO) allows you to increase
            your visibility and find the right customers for your business.
          </p>
        </article>
        <article id="online-reputation-management" className="child">
          <img
            src={ORM}
            className="float-right"
            alt="rising reputation chart on laptop jpg"
          />
          <h2>Online Reputation Management</h2>
          <p>
            The web is full of opinions, and some of these can be negative.
            Social media allows anyone with an internet connection to say
            whatever they want about your business. Online Reputation Management
            gives you the control over what potential customers see when they
            search for your business.
          </p>
        </article>
        <article id="social-media-marketing" className="child">
          <img
            src={SMM}
            className="float-left"
            alt="social marketing collaboration jpg"
          />
          <h2>Social Media Marketing</h2>
          <p>
            Social media continues to have a sizable influence on buying habits.
            Social media marketing helps you determine which platforms are
            suited to your brand, using analytics to find the right markets and
            increase your lead generation.
          </p>
        </article>
      </main>
      <aside className="benefits">
        <article>
          <h3>Lead Generation</h3>
          <img src={LG} alt="lead generation logo" />
          <p>
            Inbound strategies for lead generation require less work for your
            business, bringing customers directly to your website.
          </p>
        </article>
        <article>
          <h3>Brand Awareness</h3>
          <img src={BR} alt="brand awareness logo" />
          <p>
            Users find your business through paid and organic searches,
            increasing the search ranking and visibility for your business.
          </p>
        </article>
        <article>
          <h3>Cost Management</h3>
          <img src={CM} alt="cost management logo" />
          <p>
            As the search ranking for your business increases, your advertising
            costs decrease, and you no longer need to advertise your page.
          </p>
        </article>
      </aside>
    </div>
  );
}
