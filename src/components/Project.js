import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import {
  FaGithubSquare,
  FaShareSquare,
  FaRegEye,
  FaGithub,
  FaTag,
} from "react-icons/fa";

import { GoTag } from "react-icons/go";

import { MdOpenInNew } from "react-icons/md";

import { Link } from "gatsby";
import projects from "../constants/projects";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allProjectDataJson {
      nodes {
        description
        title
        link
        github
        tag
        img {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

const Project = () => {
  const data = useStaticQuery(query);
  const {
    allProjectDataJson: { nodes },
  } = data;

  console.log(nodes);

  return (
    <>
      {nodes.map((project) => {
        const {
          title,
          img: {
            childImageSharp: { gatsbyImageData },
          },
          description,
          tag,
          link,
          github,
        } = project;

        return (
          <>
            <div className="project-card">
              <GatsbyImage
                image={gatsbyImageData}
                alt="image"
                className="project__img"
              />
              <div className="project-card-wrapperr">
                <div className="project-card-title">
                  <h2 className="project-title">{title}</h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <div style={{ display: "flex", gap: ".4rem" }}>
                      <a href={link} target="_blank">
                        <MdOpenInNew style={{ color: "black" }} />
                      </a>
                      <a href={github} target="_blank">
                        <FaGithub style={{ color: "black" }} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className="project-paragraph">{description}</p>

                {nodes.map((i) => {
                  const btn = i.tag;
                  btn.map((j) => {
                    console.log(<button>j</button>);
                    <button>j</button>;
                  });
                })}

                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    alignItems: "center",
                    marginLeft: "0",
                  }}
                >
                  <a
                    href={link}
                    target="_blank"
                    style={{ cursor: "pointer" }}
                    rel="noreferrer"
                  >
                    {/*
                 
                 */}
                  </a>
                  {tag.map((i) => {
                    return (
                      <>
                        <button className="project-view-project-btn">
                          {i}
                        </button>
                      </>
                    );
                  })}
                </div>

                {/* <a href={link} target="_blank" style={{cursor : "pointer"}} rel="noreferrer"><button className="project-view-project-btn"><p className="project_details">view project</p></button></a> */}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Project;
