import React from 'react'
import './Dropdown.css'
import { filterCategory } from '../../Features/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const {categories} = useSelector((state) => state.Sidebar)
  const [selectedOption, setSelectedOption] = useState("");
   //console.log(categories)
   const dispatch = useDispatch();

    const handleSelect = (category) => {
      setSelectedOption(category);
      setIsOpen(false);
    };


    return(
      <div className="dropdown-menu">
        <div className="dropdown-menu__input">  
          <div className="dropdown-selected-value">{selectedOption ? selectedOption : 'Select Category'}</div>
           <div className="dropdown-tool">
              < KeyboardArrowDownIcon 
              onClick={() => setIsOpen(!isOpen)}
              />
            </div> 
         </div> 
           {isOpen && (
           <div className="dropdown-menu-list">
                {categories.map((category, index) => (
                    <div key={index} className="dropdown-menu__option"
                        onClick={() => {
                          dispatch(filterCategory(category))
                          handleSelect(category)
                      }}
                    >
                        {category}
                    </div>
                ))}
            </div>
            )}
          
      </div>

    );
  };
export default DropdownMenu;



  // return (
  //   <div className="dropdown-menu">
  //     <div className="dropdown-menu__input"
  //       onClick={() => setIsOpen(!isOpen)}
  //      >
  //       <input
  //         type="text"
  //         placeholder="Select a category"
  //         value={selectedOption ? selectedOption.name : ''}
  //         readOnly
  //       />
  //       <KeyboardArrowDownIcon />
  //     </div>
  //     {isOpen && (
  //       <div className="dropdown-menu__list">
  //         {options.map((option) => (
  //           <div
  //             key={option.id}
  //             className="dropdown-menu__option"
  //             onClick={() => handleSelect(option)}
  //           >
  //             {option.name}
  //           </div>
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );

//export default DropdownMenu;



// const Dropdown = ({placeHolder})=>{


//   const getDisplay = ()=>{
//     return placeHolder;
//   }

//   const options = [
//     {value:"Electronics", lable:"Electronics"},
//     {value:"wear", lable:"Wear"},
//     {value:"Computers", lable:"Computers"},
//     {value:"Home utensils", lable:"Home utensils"},
//     {value:"Building Materials", lable:"Building Materials"}
// ]
  

 
