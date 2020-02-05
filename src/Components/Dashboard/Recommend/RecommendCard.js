import React from "react";
import { connect } from "react-redux";
import hybrid from '../../../img/hybrid.png';
import indica from '../../../img/indica.png';
import sativa from '../../../img/sativa.png';
import { Link } from 'react-router-dom';

//
const RecommendCard = props => {
  return (
    <Link to={`/strain/${props.strain.id}`}>
        <div className='strain-card'>
            <img src={sativa} alt='sativa'/>

{/* 
{props.strain.race === "sativa" && <img src={sativa} alt="sativa" />}
{props.strain.race === "indica" && <img src={indica} alt="indica" />}
{props.strain.race === "hybrid" && <img src={hybrid} alt="hybrid" />} */}

            <p className='name'>{props.strain.name}</p>
            <p className='race'>{props.strain.race}</p>
        </div>
      </Link>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(RecommendCard);
