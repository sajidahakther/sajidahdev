import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
import Preview1 from "../../assets/projects/project01/preview.png";
import Preview2 from "../../assets/projects/project02/preview.gif";
import Preview3 from "../../assets/projects/project03/preview.png";
import Preview4 from "../../assets/projects/project04/preview.png";
import Preview5 from "../../assets/projects/project05/preview.png";
import Preview6 from "../../assets/projects/project06/preview.png";
import Heading from "../common/heading/heading";
import ProjectBox from "../common/projectBox/projectBox";
import "./projects.sass";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "Nutrivo",
          tag: "application",
        },
        {
          id: "2",
          preview: Preview2,
          title: "Eventar",
          tag: "application",
        },
        {
          id: "3",
          preview: Preview3,
          title: "Podcast",
          tag: "design",
        },
        {
          id: "4",
          preview: Preview4,
          title: "Blog",
          tag: "website",
        },
        {
          id: "5",
          preview: Preview5,
          title: "Coming soon",
          tag: "design",
        },
        {
          id: "6",
          preview: Preview6,
          title: "Coming soon",
          tag: "website",
        },
      ],

      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
    };
  }

  componentDidMount() {
    this.filterGallery("all");
  }

  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({
      filterResult: result,
      pickedFilter: target,
    });
  };

  render() {
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox
          preview={project.preview}
          key={project.id}
          title={project.title}
          tag={project.tag}
        />
      ));
    }
    const projectsBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };

    return (
      <section className="projects" id="projects">
        <div className="wrapper">
          <Heading heading="Projects" />
          <Row>
            <Col xs={12}>
              <div className="projects__nav">
                <ul>
                  <li>FILTER:</li>
                  <li
                    className={
                      this.state.pickedFilter === "all"
                        ? "projects__nav-active"
                        : null
                    }
                    onClick={() => this.filterGallery("all")}
                  >
                    ALL
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "application"
                        ? "projects__nav-active"
                        : null
                    }
                    onClick={() => this.filterGallery("application")}
                  >
                    APPLICATIONS
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "website"
                        ? "projects__nav-active"
                        : null
                    }
                    onClick={() => this.filterGallery("website")}
                  >
                    WEBSITES
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "design"
                        ? "projects__nav-active"
                        : null
                    }
                    onClick={() => this.filterGallery("design")}
                  >
                    UI/UX
                  </li>
                </ul>
              </div>
            </Col>
      
          </Row> 
          <Masonry
            breakpointCols={projectsBreakpoints}
            className="my-masonry-grid"
            columnClassName="gallery"
          >
            {projectsRender}
          </Masonry>
        </div>
      </section>
    );
  }
}

export default Projects;
