import './Heading.css';

const Heading = ({children, as, direction}) => {
 if( as === "h1"){
    return(
        <h1 className={`title-style h1 ${direction}`} ><span className='squer'></span>{children}</h1>
     );
 }  
 if( as === "h2"){
    return(
        <h2 className={`title-style h2 ${direction}`}>{children}</h2>
     );
 } 
 if( as === "h3"){
    return(
        <h3 className={`title-style h3 ${direction}`}>{children}</h3>
     );
 } 
 if( as === "h4"){
    return(
        <h4 className={`title-style h4 ${direction}`}>{children}</h4>
     );
 } 
 if( as === "h5"){
    return(
        <h5 className={`title-style h5 ${direction}`}>{children}</h5>
     );
 } 
 if( as === "h6"){
    return(
        <h6 className={`title-style h6 ${direction}`}>{children}</h6>
     );
 } 
 return(
    <h1 className={`title-style h1 ${direction}`}><span className='squer'></span>{children}</h1>
 );
}
export default Heading;