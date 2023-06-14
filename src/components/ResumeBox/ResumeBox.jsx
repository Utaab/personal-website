import './ResumeBox.css';


const ResumeBox = ({diuring, position, company ,children}) => {
    return(
        <div className='row div-white-center mt-5 mb-5 ResumeBox'>
            <div className='col-lg-4'>
                <div className='during_time'>{diuring}</div>
                <div className='position'>{position}</div>
                <div className='company_name'>{company}</div>
            </div>
            <div className='col-lg-8'>
                <div className='disceription_job'>{children}</div>
            </div>
        </div>
    );
}
export default ResumeBox;