
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../Card/card.css'
import { SlBasket } from "react-icons/sl";
import { IoHeartSharp } from "react-icons/io5";





export default function RecipeReviewCard({item}) {




  return (
    <Card sx={{ maxWidth: 407 }} style={{boxShadow:"10px 10px 20px yellow",cursor:"pointer"}} className='card'>
    <CardHeader
      title={item.name}
      subheader={`${item.brand}`}
    />
    <CardMedia className='img'
      component="img"
      height="194"
      image={item.image}
      alt="Paella dish"
    />
    <CardHeader
    title={`Qiymət:${item.price} ₼`}
    subheader={`Məhsulun sayı: ${item.stock}`}
    />
    <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {item.description}
      </Typography>
    </CardContent>
    <div className="fav-basket">
      <div className="fav"><IoHeartSharp /> </div>
      <div className="baskett"><SlBasket/></div>
    </div>
  </Card>
  );
}