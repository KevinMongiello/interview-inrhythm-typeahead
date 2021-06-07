import React, { useEffect } from 'react';
import { options } from 'yargs';

export interface ITypeahead {
  options: string[];
}

export const Typeahead: React.FC<ITypeahead> = (props) => {
  const { options } = props;

//   useEffect(() => {
//     (async () => {
//       await dispatch(getCountries());
//     })()
//   }, [])
  
  debugger;

  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <ul>
          {options.map(option => {
            return (
              <li key={option}>{option}</li>
            )
          })}
        </ul>
      </div>
      {/* <pre>{JSON.stringify(props.options, null, '  ')}</pre> */}
    </div>
  );
}
