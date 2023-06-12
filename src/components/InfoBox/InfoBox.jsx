import "./Infobox.css";

const InfoBox = ({title, children}) => {
    return(
        <div className="InfoBox">
            <div className="title_info">{title}</div>
            <div className="description-Info">{children}</div>
        </div>
    );
}
export default InfoBox