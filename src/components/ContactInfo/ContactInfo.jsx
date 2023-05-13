import './ContactInfo.css';

const ContactInfo = ({place, title, children}) =>{
    if(place === "footerPlace"){
        return(
            <div className='ContactInfo'>
                <div className='TitleInfo text-center'>{title}</div>
                <div className='DescriptionInfo text-center'>{children}</div>
            </div>
        );
    }
    return(
        <div className='ContactInfo'>
            <div className='TitleInfo'>{title}</div>
            <div className='DescriptionInfo'>{children}</div>
        </div>
    );
}
export default ContactInfo;