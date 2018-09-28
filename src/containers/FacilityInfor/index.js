import React, { Component } from 'react';
import 'whatwg-fetch';

class FacilityInfor extends Component {
    render() {
        return (<div>

            <p> Single Facility {this.props.match.params.id}</p>


        </div>
        );
    }

}

export default FacilityInfor;