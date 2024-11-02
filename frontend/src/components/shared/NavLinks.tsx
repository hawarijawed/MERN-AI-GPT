import {Link} from 'react-router-dom'
type Props ={
    to:string;
    bg: string;
    text:string;
    textcolor: string;
    onClick?:()=>Promise<void>;   
};
function NavLinks(props:Props) {
  return ( 
      <Link className='nav-link' to={props.to} style={{background:props.bg,color:props.textcolor}}>
      {props.text}
      </Link>
  )
}

export default NavLinks
