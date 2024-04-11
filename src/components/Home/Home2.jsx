import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/pa-avatar.png";

function Home2() {
  return (
    <div className="container mt-5 mx-auto px-4" id="about">
      <div className="mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/5 p-5">
            <Tilt>
              <img src={myImg} className="w-3/4 h-auto" alt="avatar" />
            </Tilt>
          </div>
          <div className="text-[white] w-full md:w-3/5 pt-4">
            <h1 className="text-4xl font-mono">
              THANK YOU FOR <span className="purple"> APPEARING </span> HERE
            </h1>
            <p className="pt-10 text-left">
              My name is <b className="purple">Phương Anh</b>, but if you're not sure how to pronounce it, you can call me <b className="purple"> Minerva </b> - which is my English name. I'm a developer who <b className="purple">loves</b> to code and works on both Back-End and Front-End, but I definitely lean more towards Back-End. Sometimes, I also dabble in systems because, at the end of the day, I just the normal person who loves <b className="purple">technology, researching, exploring, and learning.</b>
              <br />
              <br />I work regularly with
              <i>
                <b className="purple"> Golang, NodeJS </b> and more recently, <b className="purple"> ReactJS. </b>
              </i>
              <br />
              <br />
              I also really enjoy exploring about &nbsp;
              <i>
                <b className="purple">infrastructure, networks, and security, </b> (but still a fresher) so I actively seek out opportunities to collaborate with DevSecOps teams
                both within my work environment and in the community.
              </i>
              <br />
              <br />
              Because after all, my greatest aspiration is together with technology to develop the world in
              &nbsp;
              <b className="purple"> a civilized and beautiful way.</b>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="text-[white] w-full p-4">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/phuonganhniie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/minerva-do/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
