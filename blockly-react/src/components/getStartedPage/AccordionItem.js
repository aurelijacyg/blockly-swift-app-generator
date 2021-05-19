import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const AccordionItem = ({ item }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {item.icon}
          &#160; &#160;
          <Typography color="textPrimary">
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;