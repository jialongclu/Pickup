import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";

function Dropdown(props) {
const dispatch = useDispatch();
const [value, setValue] = React.useState('any');

const options = props.options
const reducer = props.reducer

const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(reducer(event.target.value));
 };
    

return (
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={value}
    label={props.title}
    onChange={handleChange}
  >
    {options.map((option) => (
        <MenuItem key={option} value={option}>{option}</MenuItem>
    ))}
  </Select>
  </FormControl>   
    )   
}

export default Dropdown;