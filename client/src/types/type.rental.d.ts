type RoomStatus = 'DISABLED' | 'SELECTABLE';
type SelectStatus = 'NONE' | 'FIRST_SELECT' | 'LAST_SELECT';
type RentalState = '대여' | '미반납' | '반납';

type ExistCurRental = {
    D_day: string;
    result: RentalInfo
}

interface RentalInfo {
    rental_id: number;
    rental_date: string;
    rental_due_date: string;
    rental_state: RentalState;
    rental_extend: false;
    user_id: string;
    tool_id: string;
    tool: {
        tool_content: string;   // 오큘러스 퀘스트2 7번 기기
        tool_state: string;     // 대여중
        tool_name: ToolName;      // "VR 실습기기"
    }
}

interface RentalTool {
    tool_id: string;
    user_id: string;
}

interface ResRentalTool {
    '200': OK;
    result?: string;
    err?: string;   
}

interface ReturnTool extends RentalTool {}

interface ResReturnTool {
    '200': OK;
    result?: string;
    err?: string;
}

interface ExtensionTool {
    tool_id: string;
} 

interface ResExtensionTool {
    '200': OK;
    result?: string;
    err?: string;
}

interface RentalClassRoom {
    tool_id: string;
    user_id: string;
    rental_date: string;
    rental_due_date: string;
    department_id: string;
}

interface ResRentalClassRoom {
    '200': OK;
    result: {
        log_id: number;
        log_type: string;
        log_title: string;
        log_content: string;
        log_create_at: string;
    }
}

interface ReturnClassRoom {
    tool_id: string;
    user_id: string;
    rental_id: string;
}

interface ResReturnClassRoom {
    '200': OK;
    result: {
        log_id: number;
        log_type: number;
        log_title: string;
        log_content: string;
        log_create_at: string;
    }
}

interface NotClassRoomCount {
    tool_id: string;
}

interface ResNotClassRoomCount {
    '200': OK;
    result: Array<{
        rental_id: number;
        rental_date: string;
        rental_due_date: string;
        rental_state: string;
        rental_extend: boolean;
        user_id: string;
        tool_id: string;
    }>;
}

interface ResViewRental {
    '200': OK;
    result: Array<Tool & {
        rentals: Array<{ user_id: string }>
    }>;
}

interface ResMyRentalList {
    '200': OK;
    result: ExistCurRental[] | string;
}

// 오류 수정 중
interface ResDeleteTool {

}

interface ResMyAllRentalList {
    '200': OK;
    result: RentalInfo | string;
}

interface ResMyLateRentalList {
    '200': OK;
    result: ExistCurRental[] | string;
}

interface ResLateRentalList {
    '200': OK;
    result: ExistCurRental[] | string;
}

interface ResRentalTableAll {
    '200': OK;
    result: Array<{
        rental_id: number;
        rental_date: string;
        rental_due_date: string;
        rental_state: string;
        rental_extend: boolean;
        user_id: string;
        tool_id: string;
    }>;
}