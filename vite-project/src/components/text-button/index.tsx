import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 

interface Props {
  title: string;
  color?: string;
  hoverColor: string;
  redirectLink: string;
}

const TextButton = ({
  title,
  color,
  hoverColor,
  redirectLink,
}: Props): JSX.Element => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(redirectLink); 
  };

  return (
    <Typography
      sx={{
        color: color,
        fontSize: "16px",
        fontWeight: 500,
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          color: hoverColor,
        },
      }}
      onClick={handleClick} 
    >
      {title}
    </Typography>
  );
};

export default TextButton;
