type Tab = 'VR' | 'TABLET' | 'LECTURE_ROOM';

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