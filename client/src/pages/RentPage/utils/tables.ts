export const getTabName = (tab: TabName | ActiveTab): string => {
    switch(tab) {
        case 'VR': 
        case 0:
            return 'VR';
        
        case 'TABLET': 
        case 1:
            return 'Tablet';

        case 'LECTURE_ROOM': 
        case 2:
            return '강의실';

        default: throw new Error(`Unknown tab value : ${tab}`);
    }
}

// export const getPropsTables = (activeTab: ActiveTab, items: AllSupplies) => {
//     switch (activeTab) {
//         case 0:

//             return { vrData: items as VR };

//         case 1:
//             return { tabletData: items as Tablet};

//         case 2:
//             return { lectureRoomData: items as LectureRoom};

//         default: throw new Error(`Unknown activeTab value : ${activeTab}`);
//     }
// }

export const isVR = (data: AllSupplies): data is VR => {
    return (data as VR).tool_division === 'VR';
}

export const isTablet = (data: AllSupplies): data is Tablet => {
    return (data as Tablet).tool_division === 'TABLET';
}

export const getToolsAvailability = (data: VR | Tablet) => {
    return data.tool_state === '대여 가능' ? '대여 가능' : data.tool_state === '수리 중' ? '수리 중' : '대여 중';
}

export const getLectureRoomAvailability = (roomName: LectureRoom) => {
    return roomName.room_state === '대여 가능' ? '대여 가능' : '대여 불가';
}