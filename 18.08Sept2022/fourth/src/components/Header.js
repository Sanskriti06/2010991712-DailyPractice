import './Header.css';
import Button from "./Button";
const Header = ({title}) =>{
    const onClick = (e) => {
        console.log("click", e);
    };
    return (
        <header>
          <h1>Hello {title}</h1>
          <Button text="Hello" color="green" 
          onClick={onClick
          } />
        </header>
    );
}
Header.defaultProps = {
    title: 'Task Tracker',
}
export default Header;