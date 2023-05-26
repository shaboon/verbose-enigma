import React from "react";

export default function Home() {
  return (
    <div>
      <section
        class="hero"
        src="../images/digital-marketing-meeting.jpg"
        alt="Team of SEO specialists"
      ></section>
      <main class="content">
        <article id="search-engine-optimization" class="child">
          {/* <img
            src="./assets/images/search-engine-optimization.jpg"
            class="float-left"
            alt="Search engine optimization jpg"
          /> */}
          <h2>Search Engine Optimization</h2>
          <p>
            The dominance of mobile internet use means that users are searching
            for the right business as they travel, shop, or sit on their couch
            at home. Search Engine Optimization (SEO) allows you to increase
            your visibility and find the right customers for your business.
          </p>
        </article>
        <article id="online-reputation-management" class="child">
          {/* <img
            src="./assets/images/online-reputation-management.jpg"
            class="float-right"
            alt="rising reputation chart on laptop jpg"
          /> */}
          <h2>Online Reputation Management</h2>
          <p>
            The web is full of opinions, and some of these can be negative.
            Social media allows anyone with an internet connection to say
            whatever they want about your business. Online Reputation Management
            gives you the control over what potential customers see when they
            search for your business.
          </p>
        </article>
        <article id="social-media-marketing" class="child">
          {/* <img
            src="./assets/images/social-media-marketing.jpg"
            class="float-left"
            alt="social marketing collaboration jpg"
          /> */}
          <h2>Social Media Marketing</h2>
          <p>
            Social media continues to have a sizable influence on buying habits.
            Social media marketing helps you determine which platforms are
            suited to your brand, using analytics to find the right markets and
            increase your lead generation.
          </p>
        </article>
      </main>
      <aside class="benefits">
        <article>
          <h3>Lead Generation</h3>
          {/* <img
            src="./assets/images/lead-generation.png"
            alt="lead generation logo"
          /> */}
          <p>
            Inbound strategies for lead generation require less work for your
            business, bringing customers directly to your website.
          </p>
        </article>
        <article>
          <h3>Brand Awareness</h3>
          {/* <img
            src="./assets/images/brand-awareness.png"
            alt="brand awareness logo"
          /> */}
          <p>
            Users find your business through paid and organic searches,
            increasing the search ranking and visibility for your business.
          </p>
        </article>
        <article>
          <h3>Cost Management</h3>
          {/* <img
            src="./assets/images/cost-management.png"
            alt="cost management logo"
          /> */}
          <p>
            As the search ranking for your business increases, your advertising
            costs decrease, and you no longer need to advertise your page.
          </p>
        </article>
      </aside>
    </div>
  );
}
