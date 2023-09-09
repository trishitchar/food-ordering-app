//composing components
//JSX elements must have one parent element = 
// either make a div and inside make elements or React.fragment (empty tag)( <></> )

const Title = () => (
    <a href='/'>
  
    <img className="logo" src="https://as1.ftcdn.net/v2/jpg/03/54/50/64/500_F_354506479_eQUbTaxZM6Fh3R02xyRFnwmEXKZcCOMg.jpg" alt=""/>
    </a>
  );
  
  const Header  = () => {
    return(
        <div className='Header'>
            <Title/>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
  }

export default Header;