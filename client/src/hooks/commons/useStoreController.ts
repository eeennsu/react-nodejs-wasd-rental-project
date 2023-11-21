import { useStepStore, useTabsStore, useTimeStore, useToolStore } from '../../zustand';

const useStoreController = () => {

    const { activeTab, setActiveTab } = useTabsStore();
    const { 
        page, setPage, 
        tool, setTool,
        toolImg, setToolImg,
        classRoom, setClassRoom
    } = useToolStore();

    const { 
        systemStep, setSystemStep, 
        text, setText,  
        selectedRoom, setSelectedRoom,
        isModalOpen, setIsModalOpen
    } = useStepStore();
    
    const { 
        rentDate, setRentDate, 
        returnDate, setReturnDate, 
        resetTimes 
    } = useTimeStore();

    const handleStepInit = (activeTab: ActiveTab = 0) => {      
        systemStep !== 'INIT' && setSystemStep('INIT');  
        activeTab !== 1 && setActiveTab(activeTab);
        text.length >= 1 && setText('');    
    }

    const handleDateInit = () => {             
        rentDate && setRentDate(null);
        returnDate && setReturnDate(null);
    }

    const handleDataInit = () => {
        selectedRoom && setSelectedRoom(null);
        tool && setTool(null);
        toolImg && setToolImg(null);
        classRoom && setClassRoom(null);
        isModalOpen && setIsModalOpen(false);
        systemStep === 'LR_RENT' && resetTimes();
    }

    const handleToolInit = () => {
        page !== 1 && setPage(1);
    }

    const handleAllStoreInit = () => {
        handleStepInit();
        handleDateInit();
        handleDataInit();
        handleToolInit();
    }

    return {
        handleStepInit,
        handleDateInit,
        handleAllStoreInit
    };
}

export default useStoreController;