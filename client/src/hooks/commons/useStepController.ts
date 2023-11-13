import { useStepStore, useTabsStore, useTimeStore } from '../../zustand';

const useStepController = () => {

    const { setActiveTab } = useTabsStore();
    const { setSystemStep, text, setText } = useStepStore();
    const { rentDate, setRentDate, returnDate, setReturnDate } = useTimeStore();

    const handleStepInit = () => {      
        setSystemStep('INIT');  
        setActiveTab(1);
        text.length >= 1 && setText('');    
    }

    const handleDateInit = () => {             
        rentDate && setRentDate(null);
        returnDate && setReturnDate(null);
    }
    return {
        handleStepInit,
        handleDateInit
    };
}

export default useStepController;