import React from 'react'
import { useSelector } from 'react-redux';
import PersonalizedCard from '../../components/PersonalizedCard/PersonalizedCard'
import Header from '../../components/Header/Header';

const Personalizedcard = () => {
  const formData = useSelector((state) => state.formData.data);
  return (
    <div>
      <Header/>
      <PersonalizedCard status="created" formData={formData}/>
      </div>
  )
}

export default Personalizedcard