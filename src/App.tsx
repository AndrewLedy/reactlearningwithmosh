import 'bootstrap/dist/css/bootstrap.css'
import List from './components/list/list';
import Button from './components/button/button';
import Alert from './components/alert/alert';
import { useState } from 'react';
import Like from './components/like/like';


function App() {
  const [AlertVisibility,SetAlertVisibility] = useState(false)
  const [LikeStatus,SetLikeStatus]=useState(false)
  const [LikeColor,SetLikeColor]=useState('')
  const handleLikeSelection=()=>{
    SetLikeStatus(LikeStatus?false:true)
    SetLikeColor(LikeStatus?'red':'')
  }
  return (
    <>
    <List onClick={()=>{console.log('clicked list')}}/>
    {AlertVisibility && <Alert onClose={()=>SetAlertVisibility(false)} dismisable="alert-dismissible"/> }
    <Button color='primary' onClick={()=>SetAlertVisibility(true)}>My Button</Button>
    <Like color={LikeColor} onClick={()=>handleLikeSelection()}/>
    </>
  );
}

export default App;
