import './IconBox.css';
import Avatar from '../../components/Avatar/Avatar';

const IconBox = ({experience, children , img}) => {
    
    return (
        <div className='slider_item'>
            <div className='icon_box'>
                <Avatar image={img} alt="HTML 5" />
                <p className='level_icon'>{experience}</p>
            </div>
            <p className='title_icon'>{children}</p>
        </div>
    );
};
export default IconBox;