function Label({text, htmlFor, info}) {
  return (
    <label className="font-medium text-md" htmlFor={htmlFor}>
      {text} 
      {' '}
      {info && <span className="text-gray-400 text-xs">{info}</span>}
    </label>
  )
}

function InputLabel({handleChange, value, info, text, id, ...rest}) {
  return (
    <div className="mb-4 grid gap-1">
      <Label htmlFor={id} text={text} info={info} />
      <input 
        value={value}
        onChange={(e) => handleChange(e)}
        className="bg-gray-200 p-2 rounded-lg w-full" 
        id={id} 
        {...rest}
      />
    </div>
  )
}

export default InputLabel;