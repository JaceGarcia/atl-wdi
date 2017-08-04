import React, { Component } from 'react';
import locationData from '../locationData'
import Location from './Location'

class Locationlist extends Component {
  render() {
      return(
          <div className='Locations' >
              <a name="Location"></a>
            {locationData.map((loc, i) => {
                return <Location key = {i} loc = {loc}/>
        })};
          </div>
    )
  }
}

export default Locationlist;
