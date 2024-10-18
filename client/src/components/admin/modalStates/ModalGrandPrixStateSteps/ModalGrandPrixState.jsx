// ModalGrandPrixState.js
import React, { useState } from 'react';
import './styles/ModalGrandPrixState.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/reducers/modalSlice';
import ModalGrandPrixStateStepOne from './ModalGrandPrixStateStepOne';
import ModalGrandPrixStateStepTwo from './ModalGrandPrixStateStepTwo';
import ModalGrandPrixStateStepThree from './ModalGrandPrixStateStepThree';
import ModalGrandPrixStateStepFour from './ModalGrandPrixStateStepFour';
import ModalGrandPrixStateStepFive from './ModalGrandPrixStateStepFive';

const ModalGrandPrixState = ({ shouldRenderContent, currentModalState }) => {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [tournamentData, setTournamentData] = useState({});

  const handleNextStep = (data) => {
    setTournamentData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      {step === 1 && <ModalGrandPrixStateStepOne onNext={handleNextStep} />}
      {step === 2 && (
        <ModalGrandPrixStateStepTwo
          onNext={handleNextStep}
          onBack={handlePreviousStep}
          selectedNumber={tournamentData.selectedNumber}
        />
      )}
      {step === 3 && (
        <ModalGrandPrixStateStepThree
          onNext={handleNextStep}
          onBack={handlePreviousStep}
          selectedTeams={tournamentData.selectedTeams}
          maxTeamsPerZone={4}
        />
      )}
      {step === 4 && (
        <ModalGrandPrixStateStepFour
          onNext={handleNextStep}
          onBack={handlePreviousStep}
          tournamentData={tournamentData}
        />
      )}
      {step === 5 && (
        <ModalGrandPrixStateStepFive
          onConfirm={handleClose}
          onBack={handlePreviousStep}
          tournamentData={tournamentData}
        />
      )}
    </div>
  );
};

export default ModalGrandPrixState;