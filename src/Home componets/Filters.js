import React, { useState } from 'react';

function MyDropdown() {

  const [selectedOptionCategory, setSelectedOptionCategory] = useState('');
  const [selectedOptionDomain, setSelectedOptionDomain] = useState('');
  const [selectedOptionIndustry, setSelectedOptionIndustry] = useState('');

  const Category = (event) => {
    setSelectedOptionCategory(event.target.value);
  };

  const Domain = (event) => {
    setSelectedOptionDomain(event.target.value);
  };

  const Industry = (event) => {
    setSelectedOptionIndustry(event.target.value);
  };

  return (
    <>
      <div className = "filters">
        <div  className='filter-dropdown'>
            <label htmlFor="myDropdown">Select Category:</label>
            <select id="myDropdown" value={selectedOptionCategory} onChange={Category} className='category-btn'>
              <option value="">-- Select --</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
            </select>
            <p>Selected option: {selectedOptionCategory}</p>
        </div>

        <div className='filter-dropdown'>
          <label htmlFor="myDropdown" >Select Domain:</label>
          <select id="myDropdown" value={selectedOptionDomain} onChange={Domain} className='category-btn'>
            <option value="">-- Select --</option>
            {selectedOptionCategory === "Software" && <option value="Web Development">Web Development</option>}
            {selectedOptionCategory === "Software" && <option value="Android Development">Android Development</option>}
            {selectedOptionCategory === "Software" && <option value="ML">ML</option>}
            {selectedOptionCategory === "Hardware" && <option value="IoT">IoT</option>}
            {selectedOptionCategory === "Hardware" && <option value="Embedded Systems">Embedded systems</option>}
            {selectedOptionCategory === "Hardware" && <option value="Verilog">Verilog</option>}
            {selectedOptionCategory === "Hardware" && <option value="IC design">IC design</option>}
          </select>
          <p>Selected option: {selectedOptionDomain}</p>
        </div>
        
        <div className='filter-dropdown'>
          <label htmlFor="myDropdown">Industry/In-house:</label>
          <select id="myDropdown" value={selectedOptionIndustry} onChange={Industry} className='category-btn'>
            <option value="">-- Select --</option>
            <option value="Industry">Industry</option>
            <option value="In-house">In-House</option>
          </select>
          <p>Selected option: {selectedOptionIndustry}</p>
        </div>
      </div>

    </>
  );
}

export default MyDropdown;
