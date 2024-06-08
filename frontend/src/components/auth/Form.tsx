import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { usePathname, useRouter } from 'next/navigation';

const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
    phoneNo: false,
    country: false,
    city: false,
    panNo: false,
    aadharNo: false,
  });

  const [formValid, setFormValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      username: !formData.username,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      password: !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(formData.password),
      phoneNo: !/^\d{10}$/.test(formData.phoneNo),
      country: !formData.country,
      city: !formData.city,
      panNo: !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNo),
      aadharNo: !/^\d{12}$/.test(formData.aadharNo),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid:", formData);
      // Proceed with form submission or other actions
      router.push(`/success?${new URLSearchParams(formData).toString()}`);
    } else {
      console.log("Form data is invalid");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
        helperText={errors.firstName ? 'First Name is required' : ''}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
        helperText={errors.lastName ? 'Last Name is required' : ''}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
        helperText={errors.username ? 'Username is required' : ''}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        helperText={errors.email ? 'Invalid email address' : ''}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        helperText={errors.password ? 'Password must be at least 6 characters, include an uppercase letter, a lowercase letter, a number, and a special character' : ''}
        fullWidth
        margin="normal"
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Phone Number"
        name="phoneNo"
        value={formData.phoneNo}
        onChange={handleChange}
        error={errors.phoneNo}
        helperText={errors.phoneNo ? 'Phone Number must be 10 digits' : ''}
        fullWidth
        margin="normal"
        required
        InputProps={{
          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
        }}
      />
      <FormControl fullWidth margin="normal" required error={errors.country}>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          label="Country"
          labelId="country-label"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
        </Select>
        {errors.country && <p style={{ color: 'red' }}>Country is required</p>}
      </FormControl>
      <TextField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        error={errors.city}
        helperText={errors.city ? 'City is required' : ''}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Pan No."
        name="panNo"
        value={formData.panNo}
        onChange={handleChange}
        error={errors.panNo}
        helperText={errors.panNo ? 'Invalid PAN Number' : ''}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Aadhar No."
        name="aadharNo"
        value={formData.aadharNo}
        onChange={handleChange}
        error={errors.aadharNo}
        helperText={errors.aadharNo ? 'Aadhar Number must be 12 digits' : ''}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
