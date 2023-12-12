
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

        case 'CLASSROOM_DESC': 
        case 'CLASSROOM_RENT': 
            return <RentRoom />

        default: throw new Error(`Unknown step value : ${step}`);
    } 
}   

export const getImgURL = (url?: string): string => {
    if (!url) {
        return '';
    }

    return new URL(url, import.meta.env.VITE_LOCAL_SERVER_URL).href;
}