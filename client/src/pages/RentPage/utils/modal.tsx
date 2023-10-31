import DescLR from "../features/Modal/Content/DescLR";
import DetailSupply from "../features/Modal/Content/DescSupply"
import RentLR from "../features/Modal/Content/RentLR";
import RentSupply from "../features/Modal/Content/RentSupply";
import RepairSupply from "../features/Modal/Content/RepairSupply";

export const getModalContent = (step: ModalStep) => {
    switch (step) {
        case 'SUPPLY_DESC':
            return <DetailSupply />

        case 'SUPPLY_RENT':
            return <RentSupply />
        
        case 'SUPPLY_REPAIR':
            return <RepairSupply />

        case 'LR_DESC': 
            return <DescLR />

        case 'LR_RENT':
            return <RentLR />
    } 
}   