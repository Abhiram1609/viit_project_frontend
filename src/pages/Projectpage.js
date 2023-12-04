import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Addproject from './Addproject';
import Currentuploaded from './Currentuploaded';
import NavbarCustom from '../Home componets/Navbar_custom';


export default function Projectpage() {
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);

  const handleDropdown1Toggle = (isOpen) => {
    setIsDropdown1Open(isOpen);
  };
  return (
    <div>
    <NavbarCustom/>
    <Dropdown className="dropdownnew"  autoClose="outside" onToggle={handleDropdown1Toggle}>
        <Dropdown.Toggle className="buttonnewpro" variant="light" id="dropdown-autoclose-inside">
         Currently uploaded projects
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdownsectionnewpro'>
         <Currentuploaded/>
        </Dropdown.Menu>
      </Dropdown>
  <Dropdown className={`dropdownnew-1 ${isDropdown1Open ? 'dropdownnew-open':''}`}  autoClose="outside">
        <Dropdown.Toggle className="buttonnewpro-1" variant="light" id="dropdown-autoclose-inside">
         Add new Project
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdownsectionnewpro-1'>
         <Addproject/>
        </Dropdown.Menu>
      </Dropdown>
  </div>
  )
}
;

