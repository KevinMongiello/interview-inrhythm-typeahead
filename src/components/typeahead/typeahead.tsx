import React, { useEffect } from 'react';

import './typeahead.css';

export interface ITypeahead {
  options: string[];
  onClick: (choice: string) => void; 
}

export const Typeahead: React.FC<ITypeahead> = (props) => {
  const { onClick, options } = props;

//   useEffect(() => {
//     (async () => {
//       await dispatch(getCountries());
//     })()
//   }, [])
  
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <ul>
          {options.map(option => {
            return (
              <li key={option}>
                <a href="#" onClick={() => onClick(option)}>
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
