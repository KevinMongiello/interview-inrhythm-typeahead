import React, { useEffect, useState } from 'react';

import './typeahead.css';

export interface ITypeahead {
  options: string[];
  onClick: (choice: string) => void; 
}

export const Typeahead: React.FC<ITypeahead> = (props) => {
  const { onClick, options } = props;
  const [searchText, setSearchText] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleType = (event: any) => {
    setSearchText(event.target.value);
    // const filtered = options.filter(option => )
  }
  
  return (
    <div>
      <div>
        <input type="text" onChange={handleType} value={searchText} />
        {searchText}
      </div>
      <div>
        <ul>
          {options.map(option => {
            return (
              <li key={option}>
                <a onClick={() => onClick(option)}>
                  {option}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}
