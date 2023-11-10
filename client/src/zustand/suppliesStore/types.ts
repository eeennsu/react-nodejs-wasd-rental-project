import { Dayjs } from 'dayjs';

export interface ITabsStore {
    activeTab: ActiveTab;
    setActiveTab: (changedTab: ActiveTab) => void;
}

export interface ISuppliesStore {
    VRsData: VR[];
    setVRsData: (datas: VR[]) => void;
    
    tabletsData: Tablet[];
    setTabletsData: (datas: Tablet[]) => void;

    lectureRoomsData: LectureRoom[];
    setLectureRoomsData: (datas: LectureRoom[]) => void;

    resetAllDatas: () => void;

    paginatedDatas: VR[] | Tablet[] | LectureRoom[];
    setPaginatedDatas: (datas: VR[] | Tablet[] | LectureRoom[]) => void; 
    resetPaginatedDatas: () => void;
}

export interface ISearchStore {
    searchTerm: string;
    setSearchTerm: (term: string) => void; 

    // searchedVRs: VR[] | null;
    // setSearchedVRs: (datas: VR[]) => void;

    // searchedTablets: Tablet[] | null;
    // setSearchedTablets: (datas: Tablet[]) => void;

    // searchedLectureRooms: LectureRoom[] | null;
    // setSearchedLectureRooms: (datas: LectureRoom[]) => void;
    searchedResults: AllSuppliesArr;
    setSearchedResults: (results: AllSuppliesArr) => void;
}

export interface IStepStore {
    isModalOpen: boolean;
    setIsModalOpen: (trigger: boolean) => void;

    detailTool: Tool | null;
    setDetailTool: (tool: Tool) => void

    // detailVR: VR | null,
    // setDetailVR: (vr: VR) => void;

    // detailTablet: Tablet | null,
    // setDetailTablet: (tablet: Tablet) => void;

    detailLectureRoom: LectureRoom | null,
    setDetailLectureRoom: (vr: LectureRoom) => void;

    resetDetailValue: () => void;

    rentDate: Date | null;
    setRentDate: (date: Date | null) => void;

    returnDate: Date | null;
    setReturnDate: (date: Date | null) => void;

    text: string;
    setText: (text: string) => void;

    selectedRoom: string | null;
    setSelectedRoom: (selctedRoom: string | null) => void;

    isProcessLoading: boolean;
    setIsProcessLoading: (trigger: boolean) => void;
    
    systemStep: SystemStep,
    setSystemStep: (systemStep: SystemStep) => void;
}