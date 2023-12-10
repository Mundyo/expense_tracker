import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;
    return <div class={classes}>{props.children}</div>
}

export default Card;