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

export const messages: Record<string, string> = {
    requireLogin:       '로그인이 필요합니다.',
    notFoundUser:       '아이디 혹은 비밀번호가 올바르지 않습니다.',  
    failGetToken:       '인증 토큰 받기에 실패하였습니다. 관리자에게 문의해 주세요.',
    sugManager:         '관리자 인증에 성공하였습니다!',
    sugLogin:           '로그인에 성공하였습니다!',
    logout:             '로그아웃을 하였습니다.',
    noneData:           '데이터가 존재하지 않습니다.',
    searchOneTerm:      '검색어를 한글자 이상 입력해주세요.',
    failSearch:         '검색 중 오류가 발생했습니다. 관리자에게 문의해 주세요.',
    noneSearch:         '검색결과가 존재하지 않습니다.',
    noneUserToolInfo:   '유저와 기자재 정보를 받아오지 못했습니다. 관리자에게 문의해 주세요.',
    sugRental:          '대여 요청이 완료되었습니다.',
    failRental:         '대여 요청에 실패하였습니다! 관리자에게 문의해 주세요.',
    textOneLength:      '사유를 한글자 이상 입력해 주세요.',
    noneRepairSelect:   '수리 목록을 선택해 주세요.',
    alreadyRental:      '이미 대여 중인 시간입니다.',
    selectedTime:       '시간이 선택되었습니다. 대여를 진행해 주세요!',
    notSelectedRoom:    '강의실이 선택되지 않았습니다.',
    selectRentalDate:   '대여할 날짜를 지정해 주세요.',
    selectRenturnDate:  '반납할 날짜를 지정해 주세요.',
    rentalStartTime:    '대여를 시작할 시간을 지정해 주세요.',
    rentalEndTime:      '대여를 마감할 시간을 입력해 주세요.',
    rentalUserInfo:     '반출자 정보를 입력해 주세요.',
    wrongClassNum:      '잘못된 형식의 학번입니다.',
    sucRepair:          '수리 요청이 완료되었습니다',
    failRepiar:         '수리 요청에 실패하였습니다! 관리자에게 문의해 주세요',
    requireManager:     '관리자 인증이 필요합니다.',
    unknownErr:         '알 수 없는 에러가 발생했습니다. 관리자에게 문의해 주세요.',
};