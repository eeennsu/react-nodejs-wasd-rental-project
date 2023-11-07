import DetailSupply from "../features/Modal/Content/DescTool"
import RentLR from "../features/Modal/Content/RentLR";
import RentSupply from "../features/Modal/Content/RentTool";
import RepairSupply from "../features/Modal/Content/RepairTool";
import MFDescSupply from '../features/Modal/footer/MFDescSupply';
import MFRentSupply from '../features/Modal/footer/MFRentSupply';
import MFRepairSupply from '../features/Modal/footer/MFRepairSupply';
import MFRentLR from '../features/Modal/footer/MFRentLR';
import MFDescLR from '../features/Modal/footer/MFDescLR';

export const getModalContent = (step: ModalStep) => {
    switch (step) {
        case 'SUPPLY_DESC':
            return <DetailSupply />

        case 'SUPPLY_RENT':
            return <RentSupply />
        
        case 'SUPPLY_REPAIR':
            return <RepairSupply />

        case 'LR_DESC': 
        case 'LR_RENT':
            return <RentLR />

        default: throw new Error(`Unknown step value : ${step}`);
    } 
}   

export const getModalFooter = (step: ModalStep) => {
    switch(step) {
        case 'SUPPLY_DESC':
            return <MFDescSupply />

        case 'SUPPLY_RENT':
            return <MFRentSupply />
        
        case 'SUPPLY_REPAIR':
            return <MFRepairSupply />

        case 'LR_DESC': 
            return <MFDescLR />

        case 'LR_RENT':
            return <MFRentLR />

        default: throw new Error(`Unknown step value : ${step}`);
    }
}

export const initModalStep = (activeTab: ActiveTab, setModalStep: (step: ModalStep) => void) => {
    switch(activeTab) {
        case 0: return;
        case 1:
        case 2:
            setModalStep('SUPPLY_DESC');
            break;
        
        case 3:
            setModalStep('LR_DESC');
            break;

        default: throw new Error(`Unknown activeTab value : ${activeTab}`);
    }
}