import React from "react";
import { styled } from "@material-ui/core/styles";
import { Typography, Paper, Box } from "@material-ui/core";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  padding: "2%",
});

const StyledPaper = styled(Paper)({
  margin: "2%",
  padding: "2%",
  boxShadow: "0 3px 5px 2px #49274A",
  backgroundColor: "#94618E",
  maxWidth: "80%",
});

const StyledTypography = styled(Typography)({
  fontFamily: "Work Sans",
  fontSize: "large",
  textAlign: "center",
});

const AboutMe = () => {
  return (
    <section className="page">
      <StyledPaper elevation={3} variant="elevation">
        <StyledBox>
          <h2>Hi! I'm Telisa.</h2>
          <StyledTypography>
            I'm a full-stack JavaScript developer, passionate about tech and
            software solutions. Please check out some of my projects listed on
            the site, or have a gander at my gitHub or Linkdin.
          </StyledTypography>
          <h2>How did I get into web development?</h2>
          <StyledTypography paragraph>
            Though always fascinated by technology, I was headed into a career
            in law. I spent a lot of time during my studies and training
            thinking of how the legal system could be made more efficient with
            the right kinds of software. After doing vacation work at a company
            developing exactly such kinds of software, I realised that software
            development was the future. My future.
          </StyledTypography>
          <StyledTypography paragraph>
            With my LLB done, I worked in law temporarily whilst I explored the
            options for a way into software development. My opportunities in
            South Africa were very limited, and with my parents emigrating to
            the UK, I decided to apply to some computer science degrees at UK
            universities. I had already been accepted to study when I stumbled
            upon Northcoders. A few days later I started my precourse material
            and I was hooked. A global pandemic later, I graduated a full-stack
            developer capable of making my endless array of ideas a reality!
          </StyledTypography>

          <h2>Interests outside of coding...</h2>
          <StyledTypography paragraph>
            I love to explore nature, so outdoor activities such as hiking,
            caving and scrambling are favourites. Furthermore, I enjoy playing
            computer games and creating digital art.
          </StyledTypography>
        </StyledBox>
      </StyledPaper>
    </section>
  );
};

export default AboutMe;
