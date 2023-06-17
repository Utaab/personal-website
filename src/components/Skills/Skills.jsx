import './Skills.css';

const Skills = ({children}) => {
    return(
        <div className="Skills">
            <div className='squer'></div>
            <span>{children}</span>
        </div>
    );
}

export default Skills;