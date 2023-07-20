
import './Box.css'

const Box = ({backgroundColor, width, height, remove}) => {
    return (
        <div className='box-margins' style={{backgroundColor: backgroundColor, width: width, height: height}}>
            <button onClick={remove}>Delete Me</button>
        </div>
    )
}

export default Box;
