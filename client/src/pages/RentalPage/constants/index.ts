export const tabs: TabName[] = [
    '전체',
    'VR',
    'TABLET',
    'LECTURE_ROOM',
]

export const suppliesQueryKeys: [string, string] = ['fetch_vrs', 'fetch_lecture_rooms'];

export const classRoom = {
    enginerringBuilding: ['공학관 317-1호', '공학관 317-2호', '공학관 319호', '공학관 320호'],
    room_mainBuilding: ['본관 504호', '본관 505호', '본관 506호', '본관 507호']
} satisfies {
    enginerringBuilding: ClassRoomName[];
    room_mainBuilding: ClassRoomName[];
}

export const repairResons: string[] = [
    '이유 01',
    '이유 02',
    '이유 03',
    '이유 04',
    '이유 05',
    '이유 06',
    '이유 07',
];

export const minutes: number[] = [0, 1, 2, 3, 4, 5];
export const hours: number[] = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
