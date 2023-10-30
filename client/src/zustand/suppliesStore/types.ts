export type SuppliesStoreType = {
    VRsData: VR[];
    setVRsData: (datas: VR[]) => void;
    
    tabletsData: Tablet[];
    setTabletsData: (datas: Tablet[]) => void;

    lectureRoomsData: LectureRoom[];
    setLectureRoomsData: (datas: LectureRoom[]) => void;

    resetAllDatas: () => void;

    paginatedDats: VR[] | Tablet[] | LectureRoom[];
    setPaginatedDats: (datas: VR[] | Tablet[] | LectureRoom[]) => void; 
    resetPaginatedDatas: () => void;
}

export type SearchStoreType = {
    searchTerm: string;
    setSearchTerm: (term: string) => void; 

    searchedVRs: VR[] | null;
    setSearchedVRs: (datas: VR[]) => void;

    searchedTablets: Tablet[] | null;
    setSearchedTablets: (datas: Tablet[]) => void;

    searchedLectureRooms: LectureRoom[] | null;
    setSearchedLectureRooms: (datas: LectureRoom[]) => void;
}