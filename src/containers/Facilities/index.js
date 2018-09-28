import React, { Component } from 'react';
import 'whatwg-fetch';
import FacilityList from '../../componets/FacilityList';
import Loader from '../../componets/Loader'
import Intro from '../../componets/Intro'

class Facilities extends Component {

    state = {
        facilities: [],
        facilityName: '',
        isFetching: false
    }

    onFacilityQueryChange = e => {

        if (e.target.value.length > 0) {
            this.setState({ facilityName: e.target.value, isFetching: true });

            fetch(`http://zhrisproject.hitrac.co.zw/hwo-portal/api/searchFacility/list?searchTerm=${e.target.value}`)
                .then(response => response.json())
                .then(json => this.setState({ facilities: json, isFetching: false }));
        }

    }

    render() {

        const { facilities, facilityName, isFetching } = this.state;

        return (<div>

            <Intro message="Search Facility Registry "></Intro>

            <input input={facilityName}
                type="text"
                onChange={this.onFacilityQueryChange}>
            </input>

            {
                !isFetching && facilities.length === 0 && facilityName.trim() === '' &&
                <p>Please type facility name to search</p>
            }
            {
                !isFetching && facilities.length === 0 && facilityName.trim() !== ''
                &&
                <p>No results found for {facilityName} </p>
            }
            {
                isFetching && <Loader />
            }
            {
                !isFetching && <FacilityList list={this.state.facilities} />
            }

        </div>
        );
    }

}

export default Facilities;