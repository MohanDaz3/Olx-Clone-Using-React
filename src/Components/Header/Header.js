import React,{useContext,useState} from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()
  
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    history.push('/')
  };

  const handleProfile = () => {
    // Add your profile page redirection here
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={()=>history.push('/')} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? (
            <div className="dropdown">
              <span className="dropbtn" onClick={toggleDropdown}>
                {user.displayName}
              </span>
              {showDropdown && (
                <div className="dropdown-content">
                  <a onClick={handleProfile}>Profile</a>
                  <br/>
                  <a onClick={handleLogout}>Logout</a>
                </div>
              )}
            </div>
          ) : (
            <span onClick={()=>history.push('/login')}>Login</span>
          )}
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>history.push('/create')}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
