import { Accordion, AccordionDetails, AccordionSummary, Typography, useTheme } from "@mui/material"
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


function Faq() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const accordionArray = [
        {
            summary: "An Important Question",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            summary: "Another Important Question",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            summary: "Your Favorite Question",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            summary: "Some Random Question",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            summary: "The Final Question",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
    ]

  return (
    <MyParentWrapper>
        <Typography variant="h6">FAQ's</Typography>
        <Typography variant="body2" sx={{marginBottom: "20px"}}>Frequently Asked Questions</Typography>
        {accordionArray.map((ele,index) => <MyAccordion obj={ele} key={index} colors={colors} />)}
    </MyParentWrapper>
  )
}

export default Faq


function MyAccordion({obj, colors}){
    return(
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="body1">{obj.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">{obj.details}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}