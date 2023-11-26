import { useState } from "react";

interface Props
{
    children:string
    maxChars?: number
}

function ExpandableTextEditor({maxChars=100,children}:Props)
{
    const [isExpanded,SetExpanded]=useState(false);
    if(children.length<=maxChars) return <p>{children}</p>;

    const text = isExpanded ? children:children.substring(0,maxChars);
    
    return <div>{text}...<button onClick={()=>{SetExpanded(!isExpanded)}}>{isExpanded?'Less':'More'}</button></div>
}

export default ExpandableTextEditor