

const Button = ({text, onClick}) => 
{
    return (
        <button onClick={onClick} class="btn">{text}</button> //render
    )
}



export default Button