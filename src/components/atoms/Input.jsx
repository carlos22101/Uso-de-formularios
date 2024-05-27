
function Input  ({ type, name, value, onChange })  {
    return (
      <input 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        className="input"
      />
    );
  };
  
  export default Input;