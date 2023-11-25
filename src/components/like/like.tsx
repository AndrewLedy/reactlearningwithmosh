import { BiLike } from "react-icons/bi";
interface Props
{
    color: string
    onClick():void
}
function Like({color,onClick}:Props)
{
    return <BiLike color={color} onClick={onClick}></BiLike>
}

export default Like