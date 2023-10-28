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
