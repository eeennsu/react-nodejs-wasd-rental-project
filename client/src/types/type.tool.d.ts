type TabName = '전체' | 'VR' | 'TABLET' | 'LECTURE_ROOM';
type ActiveTab = 0 | 1 | 2 | 3;
type ToolName = 'VR 실습기기' | '타블렛' | '강의실';
type ToolState = '대여가능' | '대여중' | '대여불가';
type SystemStep = 'INIT' | 'TOOL_REPAIR' | 'TOOL_RENT' | 'CLASSROOM_DESC' | 'CLASSROOM_RENT';
type ClassRoomName = '공학관 317-1호' | '공학관 317-2호' | '공학관 319호' | '공학관 320호' | '본관 504호' | '본관 505호' | '본관 506호' | '본관 507호';

interface Tool {
    department_id: number;
    tool_code: string;
    tool_content: string;
    tool_division: string;          
    tool_id: string;                            
    tool_name: ToolName;
    tool_purchase_date: string;
    tool_purchase_division: string;
    tool_spec: string;
    tool_standard: string;
    tool_state: ToolState;
    tool_update_at: string;
}

interface ToolImage {
    img_id: string;
    img_part_1: any;
    img_part_2: any;
    img_part_3: any;
    img_part_4: any;
    img_part_5: any;
    img_part_6: any;
    img_url: string;
    tool_id: string;
}

interface ResAddTool {
    200: 'OK';
    result: {
        result: Tool;
        image: ToolImage[];
    };
    err?: string;
}

interface ResUpdateTool {
    '200': OK;
    result: number[];
}

// 기자재 하나 조회 response
interface ResOneViewTool {
    '200': OK;
    result: {
        tool: Tool;
        img: {
            img_id: string;
            img_url: string;
            img_part_1: null,
            img_part_2: null,
            img_part_3: null,
            img_part_4: null,
            img_part_5: null,
            img_part_6: null,
            tool_id: string;
        }
    };
    err?: string;
}

// 기자재 전체 조회 response
interface ResViewTools {
    '200': OK;
    total: number;
    result: Tool[];
}

// 기자재 검색 response 
interface ResSearchTool {
    '200': OK;
    total: number;
    result: Tool[];
}

// 기자재 유형에 따른 정렬 response
interface ResRangeTool {
    '200': OK;
    total: number;
    result: Tool[];
}

// 대여 가능한 기자재, 강의실 개수 response 
interface ResRentalToolCount {
    '200': string;
    result: string;
}

// 대여 불가능한 기자재, 강의실 개수 response 
interface ResNotRentalToolCount {
    '200': OK;
    result: string;
}

// 기자재 대여 불가 처리 response
interface ResCannotRental {
    '200': OK;
    result: string;
    err?: string;
}

// 기자재 대여 가능 처리 response
interface ResCanRental {
    '200': OK;
    result: string;
    err?: string;
}