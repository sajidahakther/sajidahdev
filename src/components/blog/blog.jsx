import React from "react";
import Swiper from "react-id-swiper";
import Preview01 from "../../assets/blog/post01/preview.png";
import Preview02 from "../../assets/blog/post02/preview.png";
import Preview03 from "../../assets/blog/post03/preview.png";
import Preview04 from "../../assets/blog/post04/preview.png";
import Preview05 from "../../assets/blog/post05/preview.png";
import Preview06 from "../../assets/blog/post06/preview.png";
import Heading from "../common/heading/heading";
import BlogBox from "./blogBox";
import "./blog.sass";
import "swiper/css/swiper.css";

class Blog extends React.Component {
  state = {
    posts: [
      {
        image: Preview01,
        id: "1",
        title: "Coming soon",
        description:
          "Lorem ipsum dolor sit amet, consectetur undo thes tabore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      },
      {
        image: Preview02,
        id: "2",
        title: "Coming soon",
        description:
          "Lorem ipsum dolor undo thes tabore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        image: Preview03,
        id: "3",
        title: "Coming soon",
        description:
          "Lorem tabore et dolore magna aliqua ipsum dolor undo thes. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        image: Preview04,
        id: "4",
        title: "Coming soon",
        description:
          "Lorem tabore et dolore magna aliqua ipsum dolor undo thes. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        image: Preview05,
        id: "5",
        title: "Coming soon",
        description:
          "Lorem tabore et dolore magna aliqua ipsum dolor undo thes. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        image: Preview06,
        id: "6",
        title: "Coming soon",
        description:
          "Lorem tabore et dolore magna aliqua ipsum dolor undo thes. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  };

  render() {
    let blogPostsRender = null;
    if (this.state.posts) {
      blogPostsRender = this.state.posts.map((post) => (
        <div key={post.id}>
          <BlogBox article={post} />
        </div>
      ));
    }

    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    };

    return (
      <section className="blog" id="blog">
        <div className="wrapper">
          <Heading heading="Blog" />
          <div>
            <Swiper {...params}>{blogPostsRender}</Swiper>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
