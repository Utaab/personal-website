import './Avatar.css';

const Avatar = ({image, alt}) => {
    return(
        <img src={image} alt={alt} />
    );
}
export default Avatar;