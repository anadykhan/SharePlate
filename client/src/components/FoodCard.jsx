import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button } from '@mui/material';

export default function FoodCard (props) {

    const {title, donorName, expire, notes, likes, description, loves, image} = props

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {donorName}
                    </Avatar>
                }
                title={donorName}
                subheader={expire}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant='h6'>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ gap: '6rem', display: { md: { gap: '2rem' } } }}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Typography>
                    {loves} Likes
                </Typography>

                </Box>
                <Button sx={{ background: '#7c8c0f', color: 'white'}}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}