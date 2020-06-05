import React from "react";
import CardBook from "../../_commons/components/CardBook";
import Searching from "../../_commons/components/Searching";
import '../../../styles/Library/index.css';

function Library() {
  return (
    <div className="Library">
      <div className="container">
        <br />
        <Searching />
        <br />
        <div className="columns is-multiline is-mobile">
          { [1,2,3,4,5,6,7,8,9,11,12,13,14,15].map(e => <div key={e} className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd"> <CardBook key={e} /> </div>) }
        </div>
      </div>
    </div>
  );
}

export default Library;