import React from 'react';
import { connect } from 'react-redux';

const Home = ({myList,trends,originals}) => (
  <>
  <div>
    {originals.map((item)=>(
      <p key={item.id}>
        {item.id}
      </p>
      
    ))}
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>    <p>11</p>
    <p>11</p>
    <p>11</p>    <p>11</p>
    <p>11</p>
    <p>11</p>    <p>11</p>
    <p>11</p>
    <p>11</p>    <p>11</p>
    <p>11</p>
    <p>11</p>    <p>11</p>
    <p>11</p>
    <p>11</p>    <p>11</p>
    <p>11</p>
    <p>11</p>    <p>11</p>
    <p>11</p>
    <p>11</p>    <p>11</p>
    <p>11</p>
    <p>11</p>
  </div>
  </>
);

const mapStateToProps = state =>{
  return{
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}

export default connect(mapStateToProps,null)(Home);
