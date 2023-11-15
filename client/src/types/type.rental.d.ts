type RoomStatus = 'DISABLED' | 'SELECTABLE';
type SelectStatus = 'NONE' | 'FIRST_SELECT' | 'LAST_SELECT';

interface RentalTool{
    tool_id: string;
    user_id: string;
}

interface ResRentalTool {
    '200': OK;
    result: string;
    err?: string;   
}

interface ReturnTool extends RentalTool {}

interface ResReturnTool {
    '200': OK;
    result: string;
    err?: string;
}

interface ExtensionTool {
    tool_id: string;
} 

interface ResExtensionTool {
    '200': OK;
    result: string;
    err?: string;
}

