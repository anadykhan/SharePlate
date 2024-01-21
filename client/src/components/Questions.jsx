import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Questions = (props) => {

    const { question, answer } = props

    return (
        <div>
            <Accordion
                sx={{
                    boxShadow: 0
                }}
            >
                <AccordionSummary
                    expandIcon={<KeyboardArrowDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{
                        borderBottom: 1,
                        borderColor: '#e0e3e6',
                        color: '#67615d',
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 400
                        }}
                    >{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        sx={{
                            fontWeight: 300
                        }}
                    >
                        {answer}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default Questions