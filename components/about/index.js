import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate } from "react-icons/fa";

import Title from "../title";
import { timelineData } from "../../data/timelineData";

const About = () => {
  return (
    <section className="section" id="about">
      <Title
        title="About Me"
        icon={<FaUserGraduate className="text-blue-500" />}
      />
      <div>
        <VerticalTimeline>
          {timelineData.map((item) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#111827",
                color: "#e5e7eb",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #111827" }}
              date={item.date}
              iconStyle={{ background: "#3b82f6", color: "#fff" }}
              icon={item.icon}
              key={item.id}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                {item.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
