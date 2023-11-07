type ToolState = '대여가능' | '대여불가능';

interface Tool {
    tool_id: string;
    tool_division: Division;
    tool_code: string;
    tool_name: string;
    tool_purchase_division: string;
    tool_purchase_date: Date;
    tool_standard: string;
    tool_state: ToolState;
    tool_update_at: Data;
    tool_update_at: Date;
    tool_content: string;
    tool_spec: string;
}