
import RentalTool from "../features/Step/content/RentalTool/RentalTool";
import RepairTool from "../features/Step/content/RepairTool/RepairTool";
import RentalProcessor from '../features/RentalProcessor/RentalProcessor';
import RentRoom from '../features/Step/content/RentalRoom/RentalRoom';

export const getContent = (step: SystemStep) => {
    switch (step) {
        case 'INIT':
            return <RentalProcessor />

        case 'TOOL_REPAIR':
            return <RepairTool />
        
        case 'TOOL_RENT':
            return <RentalTool />

        case 'LR_DESC': 
        case 'LR_RENT': 
            return <RentRoom />

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

export const dateFormmat = (date?: string): string => {

    if (!date) return '';

    return new Intl.DateTimeFormat('ko-KR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(date));
}

export const getImgURL = (url: string): string => {

    return new URL(url, import.meta.env.VITE_LOCAL_SERVER_URL).href;
}