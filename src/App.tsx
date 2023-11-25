import 'bootstrap/dist/css/bootstrap.css'
import List from './components/list/list';
import Button from './components/button/button';
import Alert from './components/alert/alert';
import { useState } from 'react';


function App() {
  const [AlertVisibility,SetAlertVisibility] = useState(false)
  return (
    <>
    <List onClick={()=>{console.log('clicked list')}}/>
    {AlertVisibility && <Alert onClose={()=>SetAlertVisibility(false)} dismisable="alert-dismissible"/> }
    <Button color='primary' onClick={()=>SetAlertVisibility(true)}>My Button</Button>
    </>
  );
}

export default App;
