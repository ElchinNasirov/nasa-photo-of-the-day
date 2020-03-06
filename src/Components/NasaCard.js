import React from "react";

// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '80%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// function NasaCard(props) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             NASA
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title= { props.title }
//         subheader= { props.date }
//       />
//       <CardMedia
//         className={classes.media}
//         image= { props.url }
//         title={ props.title }
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           For more Information click to the icon.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Explanation:</Typography>
//           <Typography paragraph>
//           { props.explanation }
//           </Typography>
//           <Typography paragraph>
//           { props.explanation }
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const NasaCard = (props) => {
    return (
      <div style= {{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Card style= {{ width: "50%" }}>
          <CardImg width="100%" src= { props.url }  />
          <CardBody>
            <CardTitle>{ props.date }</CardTitle>
            <CardSubtitle>{ props.title }</CardSubtitle>
            <CardText>{ props.explanation }</CardText>
            <Button>Next</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

export default NasaCard;