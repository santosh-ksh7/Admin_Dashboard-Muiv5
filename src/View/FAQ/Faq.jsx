import { Accordion, AccordionDetails, AccordionSummary, Typography, useTheme } from "@mui/material"
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


function Faq() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <MyParentWrapper>
        <Typography variant="h6">FAQ's</Typography>
        <Typography variant="body2" sx={{marginBottom: "20px"}}>Frequently Asked Questions</Typography>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="body1">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="body1">
                Another Important Question
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="body1">
                    Your Favorite Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="body1">
                    Some Random Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="body1">
                    The Final Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </MyParentWrapper>
  )
}

export default Faq