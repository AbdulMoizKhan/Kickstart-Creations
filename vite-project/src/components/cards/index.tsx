import { Box, Card, Typography } from "@mui/material"

interface  CardsProps {
    imgSource: string;
    cardTittle: string;
    cardDescription: string;
}

export const CardsService = ({imgSource, cardTittle ,cardDescription }: CardsProps) => {
  return (
    <Card variant="outlined" className="cards" 
    sx={{
     height:"290px",
     width:'340px' ,
     boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.05)',
     borderRadius: 7 , 
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     rowGap:'10px'}} 
     >
        <Box sx={{padding:'0px 20px'}}>
            <div style={{width: 58, height: 58, background: '#FAFAFA', borderRadius: 9999, border: '1px #F76680 solid'}}>
            <img src={imgSource} alt="" style={{width: 34, height: 34, padding:'12px'}}/>
            </div>
            <Typography variant="h6" sx={{fontWeight: '600'}} className="cardhead">{cardTittle}</Typography>
            <Typography variant="body1" sx={{color: '#4A5568', fontSize: 14, fontFamily: 'Inter', fontWeight: '400'}}>{cardDescription}</Typography>
        </Box>
    </Card>
  )
}
