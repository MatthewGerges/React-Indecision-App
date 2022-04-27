import React from 'react';


//or export default (props) => {}
const Header = (props) => (
      <div className = "header">
        <div className='container'>
            <h1 className = "header__title">{props.title}</h1>
            {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
        </div>
      </div>
);
  
  Header.defaultProps = {
    title: 'Indecision'
  };

  export default Header;

  //giving it a class name allows us to target the file inside of scss