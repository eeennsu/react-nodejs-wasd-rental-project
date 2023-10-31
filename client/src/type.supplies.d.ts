type TabName = 'VR' | 'TABLET' | 'LECTURE_ROOM';
type ActiveTab = 0 | 1 | 2;

type CommonSupInfo = {
    SKU: number | string;
    itemNumber: number;
    isAvailable: boolean;
}

// type VR = CommonSupInfo & {

// }

// type Tablet = CommonSupInfo & {

// }

type VR = {
    SKU: number | string;
    itemNumber: number;
    isAvailable: boolean;
}

type Tablet = {
    SKU: number | string;
    itemNumber: number;
    isAvailable: boolean;
}

type LectureRoom = {
    name: string;
    desc: string;
    isAvailable: boolean;
}

type AllSupplies = VR | Tablet | LectureRoom;
type AllSuppliesArr = VR[] | Tablet[] | LectureRoom[];

type CustomColor = 'blue' | 'red';
type ModalStep = 'SUPPLY_DESC' | 'SUPPLY_REPAIR' | 'SUPPLY_RENT' | 'LR_DESC' | 'LR_RENT' ;
