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

export interface IModalStore {
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

    isProcessLoading: boolean;
    setIsProcessLoading: (trigger: boolean) => void;
    
    modalStep: ModalStep,
    setModalStep: (modalStep: ModalStep) => void;
}