import React from "react";
import { styled } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const StyledExpansionPanel = styled(ExpansionPanel)({
  background: "#94618E",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px #49274A",
  color: "white",
  padding: "0",
  width: "100%",
});
const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)({
  backgroundColor: "#FFFFFF",
  border: 0,
  borderRadius: 3,

  color: "#004c4c",
  padding: "20px",
  width: "100%",
});
const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)({
  border: 0,
  borderRadius: 3,
  padding: "0 30px",
  color: "white",
  width: "100%",
});
const StyledTypography = styled(Typography)({
  fontFamily: "Work Sans",
  fontSize: "large",
  textAlign: "justify",
});

export default function StyledComponents() {
  return (
    <section>
      <StyledExpansionPanel>
        <StyledExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>VisuCarta</h2>
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <Typography>Book cover recognition app - in progress!</Typography>
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>
      <StyledExpansionPanel>
        <StyledExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2>Chicken Tinder</h2>
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <StyledTypography>
            Ever have a hard time deciding where to go for dinner? Try Chicken
            Tinder, a fun way to choose where to eat!
            <section>
              <h4>Frontend:</h4>
              <a href=" https://chicken-tinder-nc.netlify.app/  ">Hosted</a>
              <br />
              <a href="https://github.com/hayeskg/ChickenTinderFrontend  ">
                Github
              </a>
              <h6>Tech stack:</h6>
              <ul>
                <li>JavaScript</li>
                <li>HTML5/CSS3</li>
                <li>React</li>
                <li>GraphQL (and Apollo)</li>
                <li>MaterialUI</li>
                <li>Firebase Authentication</li>
              </ul>
            </section>
            <section>
              <h4>Backend:</h4>
              <a href="https://chicken-tinder-backend.herokuapp.com/graphql">
                Hosted
              </a>
              <br />
              <a href="https://github.com/hayeskg/ChickenTinderBackend">
                Github
              </a>
              <h6>Tech stack:</h6>
              <ul>
                <li>JavaScript</li>
                <li>MongoDB Atlas (and mongoose)</li>
                <li>Express</li>
                <li>GraphQL</li>
                <li>Axios</li>
                <li>Jest</li>
              </ul>
            </section>
          </StyledTypography>
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>
      <StyledExpansionPanel>
        <StyledExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2>NC news</h2>
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <StyledTypography>
            A Reddit-inspired news site
            <section>
              <h4>Frontend:</h4>
              <a href="https://tel-nc-news.netlify.app/ ">Hosted</a>
              <br />
              <a href="https://github.com/BitterBlue22/NC-news-FE ">Github</a>
              <h6>Tech stack:</h6>
              <ul>
                <li>JavaScript</li>
                <li>HTML5/CSS3</li>
                <li>React</li>
                <li>@reach/router</li>
                <li>Styled Components</li>
                <li>Axios</li>
              </ul>
            </section>
            <section>
              <h4>Backend:</h4>
              <a href="https://tel-news-port.herokuapp.com/api">Hosted</a>
              <br />
              <a href="https://github.com/BitterBlue22/NC_News">Github</a>
              <h6>Tech stack:</h6>
              <ul>
                <li>JavaScript</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Knex.js</li>
                <li>Jest</li>
              </ul>
            </section>
          </StyledTypography>
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>
    </section>
  );
}
