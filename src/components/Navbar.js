const Navbar = () => {
    return ( 
        <div className="navbar-fixed">
            <nav className="nav">
                <div className="nav-wrapper">
                <a href="#" className="brand-logo right">
                    <img class="logo" src="https://www.teavana.com/wp-content/uploads/2020/05/Teavana_Logo_R_Trademark_White_Large.png" alt="Teavana Logo"></img>
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="#">OUR TEAS</a></li>
                    <li><a href="#">OUR STORY</a></li>
                    <li><a href="#">WHERE TO BUY</a></li>
                </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;