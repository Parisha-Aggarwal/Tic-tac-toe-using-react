import Icon from "../Icons/icon";
import './Card.css';
function Card({gameend,player,onPlay,index}){
    let icon=<Icon/>
    if(player=='X'){
        icon=<Icon name='cross'/>
    }else if(player=='O'){
        icon=<Icon name="circle"/>
    }
    return (
        <div className='card' onClick={()=> !gameend && player=="" &&onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;