import 'bootstrap/dist/css/bootstrap.css'
import List from './components/list/list';
import Button from './components/button/button';
import Alert from './components/alert/alert';
import { useState } from 'react';
import Like from './components/like/like';
import ExpandableTextEditor from './components/ExpandableTextEditor/ExpandableTextEditor';


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
    <ExpandableTextEditor maxChars={1001}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam, accusamus quis eveniet ea distinctio alias ipsam corporis consequatur delectus. Dolore eum doloribus praesentium magni quam dicta, veritatis voluptatem deserunt quasi iusto tempore, blanditiis, fugit corporis tenetur? Eum ea ullam quae, corrupti deserunt veritatis, doloremque hic beatae quos porro harum id ducimus temporibus cum! Laudantium eaque cupiditate explicabo perferendis veritatis dolor enim sunt dolores distinctio incidunt provident error, labore cumque ex vero nemo aliquid. Reiciendis, consectetur id! Culpa perferendis labore debitis facere! Doloremque iste accusantium quidem alias. Placeat, natus blanditiis! Quo voluptate in, perspiciatis vitae impedit error unde praesentium repellat.</ExpandableTextEditor>
    </>
  );
}

export default App;
