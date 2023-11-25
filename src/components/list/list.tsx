interface Props
{
    onClick():void
}
function List({onClick}:Props)
{
    let items=["Andrew","Loveline","Alice","Immanuel"];
    return (
        <>
    <ul className="list-group">
        {        
        items.map((item,index)=><li key={item} className="list-group-item" onClick={onClick} >{item}</li>)
        }
  </ul>
  </>);
}

export default List