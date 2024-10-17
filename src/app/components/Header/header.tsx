import headerStyle from "./header.module.css";




const Header = (props:any) =>{
    console.log(props)
    return (
     <div>
        <header className={headerStyle.header}><h1>My Next.js Website</h1>
        </header> 
    </div>
  );
} ;

export default Header


