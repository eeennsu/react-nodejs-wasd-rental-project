type ToolState = '대여가능' | '대여불가능';

interface Tool {
    tool_id: string;
    tool_division: Division;
    tool_code: string;
    tool_name: string;
    tool_purchase_division: string;
    tool_purchase_date: string;
    tool_spec: string;
    tool_content: string;
    tool_state: ToolState;
    department_id: number;
    image: string;
}

interface DetailTool {
    tool_id: string;
    tool_division: Division;
    tool_code: string;
    tool_name: string;
    tool_purchase_division: string;
    tool_purchase_date: string;
    tool_standard: string;
    tool_update_at: string;
    tool_state:ToolState;
    department_id: string;
    tool_content: string;
    tool_spec: string;
}

interface ToolImage {
    img_id: string;
    img_url: string;
    tool_id: string;
}

interface ResAddTool {
    200: 'OK';
    result: {
        result: DetailTool;
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
        tool: DetailTool;
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
    result: DetailTool[];
}

// 기자재 검색 response 
interface ResToolSearch {
    '200': OK;
    result: DetailTool[];
}

// 기자재 유형에 따른 정렬 response
interface ResRangeTool {
    '200': OK;
    result: DetailTool[];
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