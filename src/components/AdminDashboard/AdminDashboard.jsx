// // AdminDashboard.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateFormData } from './path/to/your/formDataSlice';
// import { Card, CardContent, Typography, Grid } from '@mui/material';

// const cardContainerStyles = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
// };

// const cardStyles = {
//   width: '300px',
// };

// const AdminDashboard = () => {
  
//   const dispatch = useDispatch();

//   // Example of dispatching data
//   const handleUpdateFormData = () => {
//     // Dispatch the updateFormData action with new data
//     dispatch(updateFormData({ name: 'John', phone: '123456789' }));
//   };

//   return (
//     <Grid container style={cardContainerStyles}>
//     <Grid item>
//       <Card style={cardStyles}>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             {status}
//           </Typography>
//           <Typography variant="body1">
//             <strong>Name:</strong> {formData.name}
//           </Typography>
//           <Typography variant="body1">
//             <strong>Phone:</strong> {formData.phone}
//           </Typography>
//           <Typography variant="body1">
//             <strong>Technology:</strong> {formData.technology}
//           </Typography>
//           <Typography variant="body1">
//             <strong>Domain:</strong> {formData.domain}
//           </Typography>
//           <Typography variant="body1">
//             <strong>Experience:</strong> {formData.experience}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Grid>
//   </Grid>
//   );
// };

// export default AdminDashboard;

// AdminDashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Grid } from '@mui/material';


const cardContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const cardStyles = {
  width: '300px',
};

const AdminDashboard = () => {
  // Select the formData from the Redux store
  const formData = useSelector((state) => state.formData.data);

  // Now you can use formData in your component
  console.log(formData);

  return (
        <Grid container style={cardContainerStyles}>
    <Grid item>
      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="body1">
            <strong>Name:</strong> {formData.name}
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> {formData.phone}
          </Typography>
          <Typography variant="body1">
            <strong>Technology:</strong> {formData.technology}
          </Typography>
          <Typography variant="body1">
            <strong>Domain:</strong> {formData.domain}
          </Typography>
          <Typography variant="body1">
            <strong>Experience:</strong> {formData.experience}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  );
};

export default AdminDashboard;

