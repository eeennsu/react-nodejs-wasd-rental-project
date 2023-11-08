import DetailSupply from "../features/Step/content/DescTool"
import RentLR from "../features/Step/content/RentLR";
import RentSupply from "../features/Step/content/RentTool";
import RepairSupply from "../features/Step/content/RepairTool";
import MFDescSupply from '../features/Step/footer/MFDescSupply';
import MFRentSupply from '../features/Step/footer/MFRentSupply';
import MFRepairSupply from '../features/Step/footer/MFRepairSupply';
import MFRentLR from '../features/Step/footer/MFRentLR';
import MFDescLR from '../features/Step/footer/MFDescLR';
import RentalProcessor from '../features/RentalProcessor/RentalProcessor';
import type { IStepStore } from '../../../zustand/suppliesStore/types';

export const getContent = (step: SystemStep) => {
    switch (step) {
        case 'INIT':
            return <RentalProcessor />

        case 'TOOL_REPAIR':
            return <RepairSupply />
        
        case 'TOOL_RENT':
            return <RentSupply />

        case 'LR_DESC': 
        case 'LR_RENT':
            return <RentLR />

        default: throw new Error(`Unknown step value : ${step}`);
    } 
}   

// export const handleInit = (setSystemStep: IStepStore['setSystemStep'], setText: IStepStore['setText']) => {

// }

// export const getModalFooter = (step: SystemStep) => {
//     switch(step) {
//         case 'SUPPLY_DESC':
//             return <MFDescSupply />

//         case 'SUPPLY_RENT':
//             return <MFRentSupply />
        
//         case 'SUPPLY_REPAIR':
//             return <MFRepairSupply />

//         case 'LR_DESC': 
//             return <MFDescLR />

//         case 'LR_RENT':
//             return <MFRentLR />

//         default: throw new Error(`Unknown step value : ${step}`);
//     }
// }

// export const initModalStep = (activeTab: ActiveTab, setSystemStep: I['setSystemStep']) => {
//     switch(activeTab) {
//         case 0: return;
//         case 1:
//         case 2:
//             setSystemStep('INIT');
//             break;
        
//         case 3:
//             setSystemStep('LR_DESC');
//             break;

//         default: throw new Error(`Unknown activeTab value : ${activeTab}`);
//     }
// }