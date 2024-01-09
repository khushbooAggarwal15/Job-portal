import React from 'react'
import { useSelector } from 'react-redux';
import PersonalizedCard from '../../components/PersonalizedCard/PersonalizedCard'

const Personalizedcard = () => {
  const formData = useSelector((state) => state.formData.data);
  return (
    <div><PersonalizedCard status="created" formData={formData}/></div>
  )
}

export default Personalizedcard