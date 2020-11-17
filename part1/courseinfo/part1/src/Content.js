
import Part from './Part'

const Header = (props) => {
    return (
        <>
            <Part part={props.part1} ex={props.exercises1}/>
            <Part part={props.part2} ex={props.exercises2}/>
            <Part part={props.part3} ex={props.exercises3}/>
        </>
    )
}

export default Header