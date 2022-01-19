import React from 'react';
import { makeStyles, Box, Button,Typography,Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }   
    }
}));
const HeaderButtons = () => {
    const classes = useStyle();
  return (
<Box className={classes.wrapper}>
    <Button  className={classes.login} variant="contained">Login</Button>
    <Typography style={{ marginTop: 2 }}>More</Typography>
    <Badge badgeContent={2} color="secondary">
                    <ShoppingCart />
                </Badge>
    <Typography style={{ marginTop: 2 }}>Cart</Typography>
</Box>
  )
};

export default HeaderButtons;
