import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from "./Faq.module.css"


const Footer = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}> FAQs</h2>
      <div>
      <Accordion  className={style.rapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color : "var(--color-primary)"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          className={style.summary}
        >
          Is Qtify free to use?
        </AccordionSummary>
        <AccordionDetails className={style.details}>
        Yes! It is 100% free, and has 0% ads!
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion className={style.rapper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  style={{color : "var(--color-primary)"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
          className={style.summary}
        >
          Can I download and listen to songs offline?
        </AccordionSummary>
        <AccordionDetails className={style.details}>
        Sorry, unfortunately we don't provide the service to download any songs
        </AccordionDetails>
      </Accordion>
     
        
    </div>
    </div>
  )
}

export default Footer
