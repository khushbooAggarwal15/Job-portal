// PersonalizedCard.jsx
import React from 'react';
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

const PersonalizedCard = ({ status, formData }) => {
  console.log('formData', formData)
  return (
    <Grid container style={cardContainerStyles}>
      <Grid item>
        <Card style={cardStyles}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {status}
            </Typography>
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

export default PersonalizedCard;
