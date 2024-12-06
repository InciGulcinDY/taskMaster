import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const heroImage = "/assets/HeroImage.png";
  const sectionOneBackground = "/assets/sectionOneBackground.png";
  const sectionOneImage = "/assets/sectionOneImage.png";
  const sectionTwoBackground = "/assets/sectionTwoBackground.png";
  const sectionTwoImage = "/assets/sectionTwoImage.png";
  const SectionThreeBackground = "/assets/SectionThreeBackground.png";
  const footerImage = "/assets/FooterImage.png";

  return (
    <div className="container-fluid">
      {/* Hero Image */}
      <div
        className="hero_section"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="home_page_title">
            For Planners, Dreamers, and Spreadsheet Warriors
          </h1>
          <h5 className="home_page_subtitle">
            Turn Chaos Into Clarity—
            <Link className="link" to={"/daily"}>
              Start here.
            </Link>
          </h5>
        </div>
      </div>
      {/* Title */}
      <div className="entry">
        <h2 className="entry_title">
          Designing Your Life Made Simple—We’re Here to Help
        </h2>
        <h5 className="entry_subtitle">
          Kickstart Your Journey by Organizing Your Tasks
        </h5>
      </div>
      {/* Section One */}
      <section
        className="section_one"
        style={{
          backgroundImage: `url(${sectionOneBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <img src={sectionOneImage} alt="" className="section_one_image" />
        <div className="section_one_text">
          <h2 className="section_one_title">Stop Procrastinating</h2>
          <p className="section_one_subtitle">
            Time’s Not on Your Side? We Are.
          </p>
        </div>
      </section>
      {/* Section Two */}
      <section
        className="section_two"
        style={{
          backgroundImage: `url(${sectionTwoBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="section_two_text">
          <h2 className="section_two_title">Plan More, Stress Less.</h2>
          <p className="section_two_subtitle">
            Life’s Too Short for Bad Plans. Start With a Plan, End With a Smile.
            You can view all your tasks neatly categorized by subjects in a
            single table.
          </p>
        </div>
        <img src={sectionTwoImage} alt="" className="section_two_image" />
      </section>
      {/* Section Three */}
      <section
        className="section_three"
        style={{
          backgroundImage: `url(${SectionThreeBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="section_three_text">
          <h2 className="section_three_title">
            New Habits Begin with Perfectly Crafted Routines
          </h2>
          <p className="section_three_subtitle">
            To build a new habit, define your routine and track your progress
            with our planner.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
