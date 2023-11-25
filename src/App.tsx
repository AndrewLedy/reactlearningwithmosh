import 'bootstrap/dist/css/bootstrap.css'
import List from './components/list/list';
import Button from './components/button/button';


function App() {
  return (
    <>
    <List onClick={()=>{console.log('clicked list')}}/>
    <Button color='primary' onClick={()=>console.log('clicked button')}>My Button</Button>
    </>
  );
}

export default App;
