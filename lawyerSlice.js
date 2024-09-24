import { createSlice } from '@reduxjs/toolkit';

const initialLawyers = [
  { id: 1, name: 'John Doe', specialty: 'Criminal Lawyer', availability: 4, appointments: [] },
  { id: 2, name: 'Jane Smith', specialty: 'Divorce Lawyer', availability: 3, appointments: [] },
  { id: 3, name: 'Robert Johnson', specialty: 'Property Lawyer', availability: 2, appointments: [] },
  { id: 4, name: 'Emily Davis', specialty: 'Corporate Lawyer', availability: 5, appointments: [] },
  { id: 5, name: 'David Lee', specialty: 'Environmental Lawyer', availability: 1, appointments: [] },
  { id: 6, name: 'Megan Clark', specialty: 'Family Lawyer', availability: 0, appointments: [] },
];


export const lawyerSlice = createSlice({
  name: 'lawyers',
  initialState: initialLawyers,
  reducers: {
    bookAppointment: (state, action) => {
      const { lawyer, date, time } = action.payload;
      const selectedLawyer = state.find((l) => l.id === lawyer.id);
      if (selectedLawyer && selectedLawyer.availability > 0) {
        selectedLawyer.appointments.push({ date, time });
        selectedLawyer.availability -= 1;
      }
    },
  },
});

export const { bookAppointment } = lawyerSlice.actions;

export default lawyerSlice.reducer;

{/*  developed by AYUSH GIRI
     ayushgiri698@gmail.com
     contact : 9914165162 
  
*/}