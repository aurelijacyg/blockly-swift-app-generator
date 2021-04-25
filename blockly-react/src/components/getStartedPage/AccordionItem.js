import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionItem = ( props ) => {
  const { item } = props;

  return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {item.icon}
          &#160; &#160;
          <Typography color="primary">
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

AccordionItem.propTypes = {
    item: PropTypes.object,
};

export default AccordionItem;