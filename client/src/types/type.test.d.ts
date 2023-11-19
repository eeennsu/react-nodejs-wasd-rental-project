type TabName = '전체' | 'VR' | 'TABLET' | 'LECTURE_ROOM';
type ActiveTab = 0 | 1 | 2 | 3;
type Division = 'VR' | 'TABLET';

// api fetched type
// interface Tool {
//     tool_id: string;
//     tool_division: Division;
//     tool_code: string;
//     tool_name: string;
//     tool_purchase_division: string;
//     tool_purchase_date: Date;
//     tool_state: string;
//     tool_update_at: Data
// }

// api fetcehd type
interface LectureRoom {
    room_id: string;
    room_code: string;
    room_name: string;
    room_state: string;
}

// custom_type
type VR = {
    tool_id: string;
    tool_division: Division;
    tool_code: string;
    tool_name: string;
    tool_purchase_division: string;
    tool_purchase_date: string;
    tool_standard: string;
    tool_state: ToolState;
    tool_update_at: Data;
    tool_content: string;
    tool_spec: string;
}

// custom_type
type Tablet = {
    tool_id: string;
    tool_division: Division;
    tool_code: string;
    tool_name: string;
    tool_purchase_division: string;
    tool_purchase_date: string;
    tool_standard: string;
    tool_state: ToolState;
    tool_update_at: Data;
    tool_content: string;
    tool_spec: string;
}

type AllSupplies = VR | Tablet | LectureRoom;
type AllSuppliesArr = VR[] | Tablet[] | LectureRoom[];

type CustomColor = 'blue' | 'red';
type SystemStep = 'INIT' | 'TOOL_REPAIR' | 'TOOL_RENT' | 'LR_DESC' | 'LR_RENT' ;
