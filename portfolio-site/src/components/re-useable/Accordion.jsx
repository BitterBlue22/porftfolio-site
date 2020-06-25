import React from "react";
import { styled } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const StyledExpansionPanel = styled(ExpansionPanel)({
  background: "#008080",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px #004c4c",
  color: "white",
  padding: "0 30px",
  width: "100%",
});
const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)({
  background: "radial-gradient(#ffffff, #b2d8d8	)",
  border: 0,
  borderRadius: 3,

  color: "#004c4c",
  padding: "20px",
  width: "100%",
  margin: "0 0 20px",
});
const StyledExpansionPanelSummary = styled(ExpansionPanelSummary)({
  background: "#66b2b2",
  border: 0,
  borderRadius: 3,

  color: "white",
  padding: "0 30px",
  width: "100%",
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
          <Typography>Project Latest</Typography>
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>
      <StyledExpansionPanel>
        <StyledExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Chicken Tinder</Typography>
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <Typography>
            A fun way to choose where to eat!
            <section>
              <h4>Frontend:</h4>
              <a href=" https://chicken-tinder-nc.netlify.app/  ">Hosted</a>
              <br />
              <a href="https://github.com/hayeskg/ChickenTinderFrontend  ">
                Github
              </a>
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
            </section>
          </Typography>
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>
      <StyledExpansionPanel>
        <StyledExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>NC News</Typography>
        </StyledExpansionPanelSummary>
        <StyledExpansionPanelDetails>
          <Typography>
            A Reddit-inspired news site
            <section>
              <h4>Frontend:</h4>
              <a href="https://tel-nc-news.netlify.app/ ">Hosted</a>
              <br />
              <a href="https://github.com/BitterBlue22/NC-news-FE ">Github</a>
            </section>
            <section>
              <h4>Backend:</h4>
              <a href="https://tel-news-port.herokuapp.com/api">Hosted</a>
              <br />
              <a href="https://github.com/BitterBlue22/NC_News">Github</a>
            </section>
          </Typography>
        </StyledExpansionPanelDetails>
      </StyledExpansionPanel>
    </section>
  );
}
