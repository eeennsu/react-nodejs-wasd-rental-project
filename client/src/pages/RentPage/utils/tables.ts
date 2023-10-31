export const getTabName = (tab: Tab): string => {
    switch(tab) {
        case 'VR': 
            return 'VR';
        
        case 'TABLET': 
            return 'Tablet';

        case 'LECTURE_ROOM': 
            return '강의실';
    }
}

export const getPropsTables = (activeTab: number, items: VR | Tablet | LectureRoom) => {
    switch (activeTab) {
        case 0:
            return { vrData: items as VR };
        case 1:
            return { tabletData: items as Tablet};
        case 2:
            return { lectureRoomData: items as LectureRoom};
        default:
            return {};
    }
}

export const getSuppliesAvailability = (data: AllSupplies) => {
    return data.isAvailable ? '대여 가능' : '대여 불가';
}