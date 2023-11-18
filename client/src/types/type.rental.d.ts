type RoomStatus = 'DISABLED' | 'SELECTABLE';
type SelectStatus = 'NONE' | 'FIRST_SELECT' | 'LAST_SELECT';
type RentalState = '대여' | '미반납' | '반납';

interface RentalInfo {
    rental_id: number;
    rental_date: string;
    rental_due_date: string;
    rental_state: string;
    rental_extend: false;
    user_id: string;
    tool_id: string;
    tool: {
        tool_content: string;   // 오큘러스 퀘스트2 7번 기기
        tool_state: string;     // 대여중
        tool_name: string;      // "VR 실습기기"
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

interface ResMyRentalList {
    D_day: string;
    result: RentalInfo | string;
}

// 오류 수정 중
interface ResDeleteTool {

}

interface ResMyAllRentalList {
    '200': OK;
    result: RentalInfo | string;
}

interface ResMyLateRentalList {
    D_day: string;
    result: RentalInfo | string;
}

interface ResLateRentalList {
    '200': OK;
    result: Array<{
        '200': OK;
        result: RentalInfo | string;
    }> | string;
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