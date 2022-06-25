import * as React from 'react';
import Dropdown from './Dropdown';
import { updateAgeFilter, updateSkillLevelFilter, updateHeightFilter  } from '../../redux/filters/reducer'
function FilterBar() {   
return (
    <div className="FilterBar">
        <Dropdown title="Height" options={['any', 'under 5\'5','5\'6-6ft','over 6ft']} reducer = {updateHeightFilter}/>
        <Dropdown title="Age" options={['any', '10-15','16-28','29+']} reducer = {updateAgeFilter}/>
        <Dropdown title="Level" options={['any', 'beginner','intermediate','advanced']} reducer = {updateSkillLevelFilter}/>
    </div>
    )   
}

export default FilterBar;

