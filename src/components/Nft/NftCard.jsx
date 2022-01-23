import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import sample from './sample.png';
import { CardActionArea, CardActions } from '@mui/material';

export default function SourceNft() {
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }
    var bullshitName = "VVVV Cool Nft"
    var bullshitDescription = "hehexd";
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="400"
                src={sample}
                alt="sample"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {bullshitName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {bullshitDescription}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}