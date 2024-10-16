import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/reducers/modalSlice';
import ModalRoundRobinStateStepOne from './ModalRoundRobinStateStepOne';
import ModalRoundRobinStateStepTwo from './ModalRoundRobinStateStepTwo';
import ModalRoundRobinStateStepThree from './ModalRoundRobinStateStepThree';
import ModalRoundRobinStateStepFour from './ModalRoundRobinStateStepFour';

const ModalRoundRobinState = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalState = useSelector((state) => state.modal.modalState);

  const [step, setStep] = useState(1);
  const [tournamentData, setTournamentData] = useState({});

  const [matchups, setMatchups] = useState([]);

  const handleNextStep = (data) => {
    setTournamentData((prevData) => ({ ...prevData, ...data, matchups }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleClose = () => {
    dispatch(closeModal());
    };

  if (!isOpen || modalState !== 'ModalRoundRobinState') {
    return null;
  }

  
  return (
    <div>
      {step === 1 && <ModalRoundRobinStateStepOne onNext={handleNextStep} />}
      {step === 2 && (
        <ModalRoundRobinStateStepTwo
          onNext={handleNextStep}
          onBack={handlePreviousStep}
          selectedNumber={tournamentData.selectedNumber}
        />
      )}
       {step === 3 && (
        <ModalRoundRobinStateStepThree
          onNext={handleNextStep}
          onBack={handlePreviousStep}
          selectedTeams={tournamentData.selectedTeams}
          selectedCategories={tournamentData.selectedCategories}
          numberOfRounds={tournamentData.numberOfRounds}
          matchups={matchups}
          setMatchups={setMatchups}
        />
      )}
      {step === 4 && (
        <ModalRoundRobinStateStepFour
          onConfirm={handleClose}
          onBack={handlePreviousStep}
          tournamentData={tournamentData}
        />
      )}
    </div>
  );
};

export default ModalRoundRobinState;