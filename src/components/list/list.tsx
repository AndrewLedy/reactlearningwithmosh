function List()
{
    let items=["Andrew","Loveline","Alice","Immanuel"];
    return (
        <>
    <ul className="list-group">
        {        
        items.map((item,index)=><li key={item} className="list-group-item" onClick={(event)=>{console.log(item,index)}} >{item}</li>)
        }
  </ul>
  </>);
}

export default List