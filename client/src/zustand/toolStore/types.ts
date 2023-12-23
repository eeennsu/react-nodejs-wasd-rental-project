import { Dayjs } from 'dayjs';
import { RentaledTime } from '../../pages/RentalPage/utils/timePicker';

export interface ITabsStore {
    activeTab: ActiveTab;
    setActiveTab: (changedTab: ActiveTab) => void;
}

export interface IToolStore {
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
    setSearchedResults: (searchResults: Tool[] | null) => void;
}

export interface IStepStore {
    isModalOpen: boolean;
    setIsModalOpen: (trigger: boolean) => void;

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
    rentalDate: Dayjs | null;
    setRentalDate: (date: Dayjs | null) => void;

    returnDate: Dayjs | null;
    setReturnDate: (date: Dayjs | null) => void;

    roomStatus: RoomStatus;
    setRoomStatus: (status: RoomStatus) => void;
    
    selectStatus: SelectStatus;   
    setSelectStatus: (status: SelectStatus) => void;

    firstSelectHour: number | null;
    firstSelectMin: number | null;
    lastSelectHour: number | null;
    lastSelectMin: number | null;
    setFirstSelectHour: (firstHour: number | null) => void;
    setFirstSelectMin: (firstMin: number | null) => void;
    setLastSelectHour: (lastHour: number | null) => void;
    setLastSelectMin: (lastMin: number | null) => void;

    resetTimes: () => void;
    
    timeBtnsResetTrigger: boolean;
    setTimeBtnsResetTrigger: () => void;

    closestRentaledTime: RentaledTime | null;
    setClosestRentaledTime: (closestRentaledTime: RentaledTime | null) => void;
}