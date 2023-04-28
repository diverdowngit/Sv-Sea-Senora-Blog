import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"; 
import Seo from "../components/seo";

import Banner from "../components/banner";
// import About from "../components/about";
// import Service from "../components/service";
// import Work from "../components/work";
import Blogs from "../components/blogs";
// import Testimonial from "../components/testimonial";
// import Contact from "../components/contact";
import Photos from "../components/photos";
import Ewv from "./Ewv";

const IndexPage = ({ data }) => (
  <Layout header="home">
     <Seo
      title={data.contentfulAboutMe.designation}
      keywords={[`Sailing`, `Liveaboard`, `Cruiser`,`Sea Senora`]}
    /> 
    <Banner data={data.contentfulAboutMe}></Banner>
    <Ewv />
    {/*  {data.contentfulSiteInformation.menus
      .filter(item => item === "About")
      .map(t => {
        return <About key="About" data={data.contentfulAboutMe}></About>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Service")
      .map(t => {
        return <Service key="Service" data={data.allContentfulService}></Service>;
      })} */}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Blogs")
      .map((t) => {
        return <Blogs key="Blogs" data={data.allContentfulBlogs}></Blogs>;
      })}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Work")
      .map(t => {
        return <Work key="Work" data={data.allContentfulWorks}></Work>;
      })} */}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Testimonials")
      .map(t => {
        return (
          <Testimonial key="Testimonial" data={data.allContentfulTestimonials}></Testimonial>
        );
      })} */}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Photos")
      .map((t) => {
        return <Photos key="Photos" data={data.contentfulPhotos}></Photos>;
      })}

    {/* {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact key="Contact" data={data.contentfulAboutMe.gmail}></Contact>;
      })} */}
  </Layout>
);

export default IndexPage;
export const Head = () => <title>Home Page</title>;
export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      designation
      age
      facebook
      github
      gmail
      id
      instagram
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      bannerList
    }
    allContentfulBlogs(limit: 4, sort: { createdAt: DESC }) {
      edges {
        node {
          title
          slug
          featureImage {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
          createdAt
        }
      }
    }
    allContentfulWorks {
      edges {
        node {
          siteName
          url
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
    contentfulPhotos {
      photos {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    contentfulSiteInformation {
      menus
    }
  }
`;
