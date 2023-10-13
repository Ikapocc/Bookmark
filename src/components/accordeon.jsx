import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionComp({title, description}) {
  return (
    <div>
      <Accordion className='max-w-2xl'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-cyan-700'/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-gray-800 font-semibold hover:text-red-500'>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}