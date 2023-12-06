export const getTabName = (tab: TabName | ActiveTab): string => {
    switch(tab) {
        case '전체':
        case 0:
            return '전체';

        case 'VR': 
        case 1:
            return '오큘러스';
           
        case 'TABLET': 
        case 2:
            return '타블렛';

        case 'LECTURE_ROOM': 
        case 3:
            return '강의실';

        default: throw new Error(`Unknown tab value : ${tab}`);
    }
}