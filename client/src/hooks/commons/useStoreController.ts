import { useStepStore, useTabsStore, useTimeStore, useToolStore } from '../../zustand';
import { shallow } from 'zustand/shallow';

const useStoreController = () => {

    const setActiveTab = useTabsStore(state => state.setActiveTab);
    const { 
        page, setPage, 
        tool, setTool,
        toolImg, setToolImg,
        classRoom, setClassRoom
    } = useToolStore(state => ({
        page: state.page, setPage: state.setPage,
        tool: state.tool, setTool: state.setTool,
        toolImg: state.toolImg, setToolImg: state.setToolImg,
        classRoom: state.classRoom, setClassRoom: state.setClassRoom,
    }), shallow);

    const { 
        systemStep, setSystemStep, 
        text, setText,  
        selectedRoom, setSelectedRoom,
        isModalOpen, setIsModalOpen
    } = useStepStore(state => ({
        systemStep: state.systemStep, setSystemStep: state.setSystemStep,
        text: state.text, setText: state.setText,
        selectedRoom: state.selectedRoom, setSelectedRoom: state.setSelectedRoom,
        isModalOpen: state.isModalOpen, setIsModalOpen: state.setIsModalOpen,
    }), shallow);
    
    const { 
        rentDate, setRentDate, 
        returnDate, setReturnDate, 
        resetTimes 
    } = useTimeStore(state => ({
        rentDate: state.rentDate, setRentDate: state.setRentDate,
        returnDate: state.returnDate, setReturnDate: state.setReturnDate,
        resetTimes: state.resetTimes
    }), shallow);

    const handleStepInit = (selectedActiveTab: ActiveTab = 0) => {      
        systemStep !== 'INIT' && setSystemStep('INIT');  
        setActiveTab(selectedActiveTab);
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