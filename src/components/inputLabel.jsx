function Label({text, htmlFor, info}) {
  return (
    <label className="font-medium text-md" htmlFor={htmlFor}>
      {text} 
      {' '}
      {info && <span className="text-xs text-gray-400">{info}</span>}
    </label>
  )
}

function InputLabel({handleChange, value, info, text, id, key, ...rest}) {
  return (
    <div className="grid gap-1 mb-4">
      <Label htmlFor={id} text={text} info={info} />
      <input 
        key={key}
        value={value}
        onChange={(e) => handleChange(e)}
        className="w-full p-2 bg-gray-200 rounded-lg" 
        id={id} 
        {...rest}
      />
    </div>
  )
}

export default InputLabel;