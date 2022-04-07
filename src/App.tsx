import React, { FunctionComponent } from 'react';
  
//typage du composant App avec React.FC, FC signifie function component => composant pouvant être écrit sous la forme d'une fonction. changment par functionComponent -> destructuring, plus lisible.
const App: FunctionComponent = () => {
  const name: String = 'React';
    
  return (
    <h1>Bonjour, {name} !</h1>
  )
}
  
export default App;
