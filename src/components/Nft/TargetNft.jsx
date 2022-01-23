import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import sample from './sample.png';
import { CardActionArea, CardActions } from '@mui/material';
import { Button, Dimmer, Header, Icon, Image, Segment } from 'semantic-ui-react';

export default function SourceNft() {
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }
    var bullshitName = "VVVV Cool Nft"
    var bullshitDescription = "hehexd";
    return (
        <Dimmer.Dimmable as={Segment} dimmed>
            <Dimmer active>
                <div>
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
                        <CardActions>
                            <LoadingButton onClick={handleClick} loading={loading}  loadingIndicator="Minting..." variant="contained">
                                Mint
                            </LoadingButton>
                        </CardActions>
                    </Card>
                </div> 
              </Dimmer>               
            {/* <Dimmer active={loading} onClickOutside={handleClick}>
                <Header as='h2' icon inverted>
                <Icon name='heart' />
                    Dimmed Message!
                </Header>
            </Dimmer> */}
        </Dimmer.Dimmable>
    );
}