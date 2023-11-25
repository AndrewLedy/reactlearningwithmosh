interface Props
{
    dismisable: 'alert-dismissible' | ''
    onClose():void
}

function Alert({dismisable,onClose}:Props)
{
    return <div className={'alert alert-warning ' + dismisable + 'fade show'} role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" onClick={onClose} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
}

export default Alert