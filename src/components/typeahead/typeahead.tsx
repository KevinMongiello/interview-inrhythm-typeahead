import React, { useEffect } from 'react';

export interface ITypeahead {
  options: string[];
}

export const Typeahead: React.FC<ITypeahead> = (props) => {

//   useEffect(() => {
//     (async () => {
//       await dispatch(getCountries());
//     })()
//   }, [])

  return (
    <div>
      <pre>{JSON.stringify(props.options, null, '  ')}</pre>
    </div>
  );
}
