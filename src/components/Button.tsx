import react from 'react'
import './Button.css'

interface ButtonProps {
  className: string;
  text: string;
  se: boolean;
}

const Button: React.FC<ButtonProps> = ({ className, text, se }) => {

    function ifHover(se:boolean) {
        if(se === true) {
            return "hover"
        }
    }

    return(
        <div> 
            <button className={`Button ${className} ${ifHover(se)}`}>{text}</button>
        </div>
    )
}

export default Button;
