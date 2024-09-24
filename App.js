import React, { useState } from 'react';
import LawyerList from './components/LawyerList';
import AppointmentForm from './components/AppointmentForm';
import AppointmentHistory from './components/AppointmentHistory';
import { Modal, Button } from 'react-bootstrap';

const App = () => {
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [lawyerForHistory, setLawyerForHistory] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false); // Modal state for booking
  const [showHistoryModal, setShowHistoryModal] = useState(false); // Modal state for appointment history

  const handleCloseBookingModal = () => setShowBookingModal(false);
  const handleShowBookingModal = (lawyer) => {
    setSelectedLawyer(lawyer);
    setShowBookingModal(true);
  };

  const handleCloseHistoryModal = () => setShowHistoryModal(false);
  const handleShowHistoryModal = (lawyer) => {
    setLawyerForHistory(lawyer);
    setShowHistoryModal(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <LawyerList
            onSelectLawyer={handleShowBookingModal} // Open booking modal
            onShowAppointments={handleShowHistoryModal} // Open history modal
          />
        </div>
      </div>

      {/* Booking Modal */}
      {selectedLawyer && (
        <Modal show={showBookingModal} onHide={handleCloseBookingModal} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Book Appointment with {selectedLawyer.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AppointmentForm lawyer={selectedLawyer} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseBookingModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* History Modal */}
      {lawyerForHistory && (
        <Modal show={showHistoryModal} onHide={handleCloseHistoryModal} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Appointment History for {lawyerForHistory.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AppointmentHistory lawyer={lawyerForHistory} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseHistoryModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default App;

{/*  developed by AYUSH GIRI
     ayushgiri698@gmail.com
     contact : 9914165162 
  
*/}