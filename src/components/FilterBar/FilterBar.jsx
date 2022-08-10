import * as React from "react";
import Dropdown from "./Dropdown";
import {
  updateAgeFilter,
  updateSkillLevelFilter,
  updateHeightFilter,
} from "../../redux/filters/reducer";

import "./FilterBar.css";

function FilterBar() {
  return (
    <div className="FilterBar">
      <div className="DropdownFilter">
        <Dropdown
          title="Height"
          options={["any", "under 165cm", "165cm-185cm", "over 185cm"]}
          reducer={updateHeightFilter}
        />
      </div>
      <div className="DropdownFilter">
        <Dropdown
          title="Age"
          options={["any", "10-15", "16-28", "29+"]}
          reducer={updateAgeFilter}
        />
      </div>
      <div className="DropdownFilter">
        <Dropdown
          title="Level"
          options={["any", "beginner", "intermediate", "advanced"]}
          reducer={updateSkillLevelFilter}
        />
      </div>
    </div>
  );
}

export default FilterBar;
