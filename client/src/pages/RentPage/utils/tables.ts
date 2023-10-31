export const getTabName = (tabName: TabName): string => {
    switch(tabName) {
        case 'VR': 
            return 'VR';
        
        case 'TABLET': 
            return 'Tablet';

        case 'LECTURE_ROOM': 
            return '강의실';

        default: throw new Error(`Unknown tab value : ${tabName}`);
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

        default: throw new Error(`Unknown activeTab value : ${activeTab}`);
    }
}

export const getSuppliesAvailability = (data: AllSupplies) => {
    return data.isAvailable ? '대여 가능' : '대여 불가';
}