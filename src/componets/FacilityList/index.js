import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'

const FacilityListItem = ({ facilities }) => (
    <li>
        <Link to={`/facilities/${facilities.id}`}>
            {facilities.name}
        </Link>
    </li>
);

const FacilityList = (props) => {
    return (
        <div>
            <ul className="facility-list">
                {props.list.map(facilities => (
                    <FacilityListItem facilities={facilities} key={facilities.id} />
                ))}
            </ul>
        </div>
    )
}


export default FacilityList;