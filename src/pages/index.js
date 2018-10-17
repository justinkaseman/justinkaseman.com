import React, { Component } from "react";
import Layout from "../components/layout";

import { navigate } from "gatsby";

import Section from "../components/section";
import SectionMain from "../components/sectionMain";
import NavigationArrows from "../components/navigationArrows";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenSize: "",
    };

    this.checkSize = this.checkSize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.checkSize);
    window.addEventListener("keydown", this.onKeyDown);
    this.checkSize();
  }

  checkSize() {
    const currentSize = window.innerWidth;
    let newSize;
    if (currentSize < 641) newSize = "Mobile";
    else if (currentSize < 1201) newSize = "Tablet";
    // else if (currentSize > 1200) newSize = "Desktop";
    if (this.state.screenSize !== newSize)
      this.setState({ screenSize: newSize });
  }

  onKeyDown(e) {
    if (window.innerWidth > 641) {
      if (e.key === "ArrowLeft") navigate("/random/");
      else if (e.key === "ArrowRight") navigate("/projects/");
      else if (e.key === "ArrowUp") navigate("/about/");
      else if (e.key === "ArrowDown") navigate("/writing/");
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
    window.removeEventListener("keydown", this.onKeyDown);
  }

  render() {
    return (
      <Layout>
        {this.state.screenSize === "Mobile" ? (
          <div>
            <SectionMain index={0} background={"#cecece"} size={true} />
            <Section
              title={"About"}
              body={[
                "I’m a San Fransisco Bay Area, native born and raised. My background is in health and fitness which grew from my own body transformation in which I lost 100lbs. This taught me my strongest life lesson: you can do anything I set my mind to. It led me down the path of getting my BSc. in Exercise Physiology. While in university, I opened my own independent personal training business. I needed a website to advertise myself, so I decided to build my own.. and that was it, I was addicted.",
                "After graduation, I spent the next 6 months engrossed self-studying. I enrolled in Lambda School, a full time intensive 7.5 month long Computer Science Academy. I finished with honors along with 6 weeks of TAing for the Computer Science curriculum (Data Structures & Algorithms, C lang, & OS/Processes). Software Engineering has given me an outlet to fulfill my greatest passions: creating, problem-solving, lifelong learning.",
              ]}
              index={1}
              background={"pink"}
            />
            <Section
              title={"Projects"}
              items={[
                {
                  title: "myShifts.app",
                  image:
                    "https://raw.githubusercontent.com/Lambda-School-Labs/CS10-employee-shift/master/front-end/public/favicon.ico",
                  description:
                    "Easy work schedule shift management. Built with small business users in mind. 💙",
                  technology: "PostgreSQL • Django • React • Redux",
                  url: "https://www.myshifts.app/",
                },
                {
                  title: "Crypto Gym",
                  image:
                    "https://raw.githubusercontent.com/helios-coop/cryptogym/master/client/public/favicon.ico",
                  description:
                    "An interactive code training platform to help bring web developers into the blockchain age.",
                  technology: "MongoDB • Express • React • Node",
                  url: "https://cryptogym.netlify.com/",
                },
                {
                  title: "Wallet Watcher",
                  image: "",
                  description:
                    "SMS/Email notifications when a specified Ethereum address' balance changes. \n 3rd Place Lambda Hackathon Winner.",
                  technology: "MongoDB • Express • React • Node",
                  url: "https://youtu.be/DmIB3gslWdg",
                },
                {
                  title: "Justin Kaseman.com",
                  image: "",
                  description: "Check this site out on GitHub!",
                  technology: "Gatsby using GraphQL",
                  url: "https://github.com/Jkasem/justinkaseman.com",
                },
              ]}
              index={2}
              background={"#b2f3b2"}
            />
            <Section
              title={"Writing"}
              items={[
                {
                  title:
                    "Lambda School: the Personal Trainer of Computer Science fitness",
                  image:
                    "https://cdn-images-1.medium.com/max/800/1*HsMuYhtpUdRqWTudC8DWQw.png",
                  description: "Tales of a quarter-life crisis career switch.",
                  url:
                    "https://medium.com/@justinkaseman/coding-bootcamps-the-personal-trainers-of-computer-science-fitness-43909bbe47be",
                },
                {
                  title: "Lambda School: CS Front-End Recap",
                  image:
                    "https://miro.medium.com/max/728/1*YuF6cg0QfqCnpI_d1YBmWg.png",
                  description:
                    "Ever wondered what non-traditional schooling is like? A recap of my first third of Lambda School.",
                  url:
                    "https://medium.com/@justinkaseman/lambda-school-cs-front-end-recap-48646fc11e2c",
                },
                {
                  title: "The Simple First Step to Start Losing Fat",
                  image:
                    "https://static1.squarespace.com/static/573d46ef60b5e97fae685d44/t/57c3b9368419c2d24d6237f2/1472444734183/?format=750w",
                  description:
                    "Technical writing from my personal training days.",
                  url:
                    "http://www.toptierfitnessonline.com/blog/how-to-lose-weight",
                },
                {
                  title: "",
                  image: "",
                  description: "",
                  url: "",
                },
              ]}
              index={3}
              background={"violet"}
            />
            <Section
              title={"Random"}
              description={"Things that I enjoy"}
              items={[
                { title: "💪 Weight Lifting" },
                { title: "⛰ Hiking & Backpacking" },
                { title: "🎹 Piano" },
                { title: "🂠 Board Games & Magic the Gathering" },
                { title: "🗑 Disc Golf" },
                { title: "🌟 Self Improvement" },
              ]}
              index={4}
              background={"#8fcadd"}
            />
          </div>
        ) : (
          <div>
            <SectionMain index={0} background={"#cecece"} />
            <NavigationArrows
              up={"/about"}
              upText={"ABOUT"}
              right={"/projects/"}
              rightText={"PROJECTS"}
              down={"/writing/"}
              downText="WRITING"
              left={"/random/"}
              leftText="RANDOM"
            />
          </div>
        )}
      </Layout>
    );
  }
}

export default IndexPage;
