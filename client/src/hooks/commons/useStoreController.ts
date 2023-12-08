import { useSearchStore, useStepStore, useTabsStore, useTimeStore, useToolStore } from '../../zustand';
import { shallow } from 'zustand/shallow';

const useStoreController = () => {

    const setActiveTab = useTabsStore(state => state.setActiveTab);
    const { 
        page, setPage, 
        tool, setTool,
        toolImg, setToolImg,
    } = useToolStore(state => ({
        page: state.curPage, setPage: state.setCurPage,
        tool: state.tool, setTool: state.setTool,
        toolImg: state.toolImg, setToolImg: state.setToolImg,
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
        rentalDate, setRentalDate, 
        returnDate, setReturnDate, 
        resetTimes 
    } = useTimeStore(state => ({
        rentalDate: state.rentalDate, setRentalDate: state.setRentalDate,
        returnDate: state.returnDate, setReturnDate: state.setReturnDate,
        resetTimes: state.resetTimes
    }), shallow);

    const {
        searchTerm, setSearchTerm,
        searchedResults, setSearchedResults
    } = useSearchStore(state => ({
        searchTerm: state.searchTerm, setSearchTerm: state.setSearchTerm,
        searchedResults: state.searchedResults, setSearchedResults: state.setSearchedResults,
    }), shallow);



    const setStepInit = (selectedActiveTab: ActiveTab = 0) => {      
        systemStep !== 'INIT' && setSystemStep('INIT');  
        setActiveTab(selectedActiveTab);
        text.length >= 1 && setText('');    
    }

    const setDateInit = () => {             
        rentalDate && setRentalDate(null);
        returnDate && setReturnDate(null);
    }

    const setDataInit = () => {
        selectedRoom && setSelectedRoom(null);
        tool && setTool(null);
        toolImg && setToolImg(null);
        isModalOpen && setIsModalOpen(false);
        systemStep === 'CLASSROOM_RENT' && resetTimes();
    }

    const setToolInit = () => {
        page !== 1 && setPage(1);
    }

    const setSearchDataInit = () => {
        searchTerm.length >= 1 && setSearchTerm('');
        searchedResults && setSearchedResults(null);
    }

    const setAllStoreInit = () => {
        setStepInit();
        setDateInit();
        setDataInit();
        setToolInit();
        setSearchDataInit();
    }

    return {
        setStepInit,
        setDateInit,
        setSearchDataInit,
        setAllStoreInit
    };
}

export default useStoreController;