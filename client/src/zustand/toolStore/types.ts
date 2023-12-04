export interface ITabsStore {
    activeTab: ActiveTab;
    setActiveTab: (changedTab: ActiveTab) => void;
}

export interface IToolStore {
    // VRsData: VR[];
    // setVRsData: (datas: VR[]) => void;
    
    // tabletsData: Tablet[];
    // setTabletsData: (datas: Tablet[]) => void;

    // classRoomsData: ClassRoom[];
    // setClassRoomsData: (datas: ClassRoom[]) => void;

    // resetAllDatas: () => void;

    // paginatedDatas: VR[] | Tablet[] | ClassRoom[];
    // setPaginatedDatas: (datas: VR[] | Tablet[] | ClassRoom[]) => void; 
    // resetPaginatedDatas: () => void;
    
    tool: Tool | null;
    setTool: (tool: Tool | null) => void;

    toolImg: ToolImage | null | undefined;
    setToolImg: (img: ToolImage | null | undefined) => void;

    curPage: number;
    setCurPage: (curPage: number) => void;   
    
    total: number;
    setTotal: (page: number) => void;
}

export interface ISearchStore {
    searchTerm: string;
    setSearchTerm: (term: string) => void; 

    searchedResults: Tool[] | null;
    setSearchedResults: (isSearched: Tool[] | null) => void;

    // searchedVRs: VR[] | null;
    // setSearchedVRs: (datas: VR[]) => void;

    // searchedTablets: Tablet[] | null;
    // setSearchedTablets: (datas: Tablet[]) => void;

    // searchedClassRooms: ClassRoom[] | null;
    // setSearchedClassRooms: (datas: ClassRoom[]) => void;
    // searchedResults: AllSuppliesArr;
    // setSearchedResults: (results: AllSuppliesArr) => void;
}

export interface IStepStore {
    isModalOpen: boolean;
    setIsModalOpen: (trigger: boolean) => void;

    // detailTool: Tool | null;
    // setDetailTool: (tool: Tool | null) => void

    // detailVR: VR | null,
    // setDetailVR: (vr: VR) => void;

    // detailTablet: Tablet | null,
    // setDetailTablet: (tablet: Tablet) => void;

    // detailClassRoom: ClassRoom | null,
    // setDetailClassRoom: (vr: ClassRoom | null) => void;
 
    // resetDetailValue: () => void;

    text: string;
    setText: (text: string) => void;

    selectedRoom: ClassRoomName | null;
    setSelectedRoom: (selctedRoom: ClassRoomName | null) => void;

    isProcessLoading: boolean;
    setIsProcessLoading: (trigger: boolean) => void;
    
    systemStep: SystemStep,
    setSystemStep: (systemStep: SystemStep) => void;
}

export interface ITimeStore {
    rentDate: Date | null;
    setRentDate: (date: Date | null) => void;

    returnDate: Date | null;
    setReturnDate: (date: Date | null) => void;

    roomStatus: RoomStatus;
    setRoomStatus: (status: RoomStatus) => void;
    
    selectStatus: SelectStatus;   
    setSelectStatus: (status: SelectStatus) => void;

    firstSelectHour: number | null;
    firstSelectMin: number | null;
    lastSelectHour: number | null;
    lastSelectMin: number | null;
    setFirstSelectHour: (firstHour: number) => void;
    setFirstSelectMin: (firstMin: number) => void;
    setLastSelectHour: (lastHour: number) => void;
    setLastSelectMin: (lastMin: number) => void;

    resetTimes: () => void;
    
    timeBtnsResetTrigger: boolean;
    setTimeBtnsResetTrigger: () => void;
}