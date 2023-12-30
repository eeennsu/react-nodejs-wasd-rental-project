type RepairState = '수리중' | '수리완료' | '미확인';

interface RepairTool {
    repair_part: string;
    repair_reason: string;
    user_id: string;
    tool_id: string;
}

interface RepairInfo {
    repair_id: number;
    repair_part: string;
    repair_reason: string;
    repair_create_at: string;
    repair_state: RepairState;
    user_id: string,
    tool_id: string;
}

interface RepairInfoDetail {
    repair_id: number;
    repair_part: string;
    repair_reason: string;
    repair_create_at: string;
    repair_state: RepairState;
    user_id: string,
    tool_id: string;
    user: {
        user_name: string;
    };
    tool: {
        tool_content: string;
    }
}

interface ResRepairTool {
    '200': OK;
    suc: string;
    result: {
        repairResult: RepairInfo;
        logResult: {
            log_id: number;
            log_type: number;
            log_title: string,
            log_content: string;
            log_create_at: string;
        }
    }
}

interface CheckRepair {
    repair_id: number;
    repair_state: string;
}

interface ResChekRepair {
    '200': OK;
    result: string;
}

interface ResMyRepairList {
    '200': OK;
    result?: RepairInfoDetail[];
    msg: string;
    total: number;
}

interface ResMyRepairView {
    '200': OK;
    result?: RepairInfoDetail[];
    msg?: string;
}

interface ResNotRepairList {
    '200': OK;
    result?: RepairInfoDetail[];
    msg?: string;
}

interface ResAllRepairList {
    '200': OK;
    result: RepairInfo[]
}