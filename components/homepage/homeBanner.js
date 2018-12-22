const HomeBanner = () => (
  <section id="main-banner-photo" className="banner-section center">
    <div className="container align-middle">
      <div id="homepage-main-headline">
        <h1>Software for Nonprofits </h1>
      </div>
      <div id="homepage-sub-headline">
        <p>
          We are a team of UIUC students who create robust software for social
          good. We believe that our engineering skill sets do not render us
          useless in addressing social injustices. Instead, they empower us to
          build a better society together.
        </p>
      </div>
      <div className="cta-box">
        <button
          type="button"
          className="btn btn-outline-light"
          id="cta-button"
          onclick="location.href= './about.html'"
        >
          Learn More
        </button>
        <button
          type="button"
          className="btn btn-outline-light"
          id="cta-button"
          onclick="location.href='./apply.html'"
        >
          Apply{" "}
        </button>
      </div>
    </div>
    <style jsx>{`
      .banner-section {
        padding-top: 100px;
        background: white /*url('./img/banner sample.svg') no-repeat fixed*/;
        background-size: cover;
        margin-top: 50px;
      }
      #main-banner-photo {
        height: 650px;
        background-image: url("/static/fa18-team-2.png");
        display: flex;
        background-attachment: fixed;
        background-position: center center;
      }

      #main-banner-headline {
        margin-bottom: 24px;
        font-family: "Chivo", sans-serif;
      }

      #main-headline h1 {
        font-size: 60px !important;
        font-weight: 600;
        color: #104a80;
        font-family: "Chivo", sans-serif;
      }

      #homepage-main-headline h1 {
        font-size: 60px !important;
        font-weight: 600;
        color: white;
        font-family: "Chivo", sans-serif;
      }

      #sub-headline {
        max-width: 600px;
        margin: 0 auto;
      }

      #sub-headline p {
        font-size: 20px;
        margin-bottom: 28px auto;
        color: black;
        font-weight: 350;
      }

      #homepage-sub-headline {
        max-width: 600px;
        margin: 0 auto;
      }

      #homepage-sub-headline p {
        font-size: 20px;
        margin-bottom: 28px auto;
        color: white;
        font-weight: 350;
      }
    `}</style>
  </section>
);

export default HomeBanner;
