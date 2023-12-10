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
    repair_state: string;
    user_id: string,
    tool_id: string;
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
    result?: RepairInfo[];
    msg: string;
}

interface ResMyRepairView {
    '200': OK;
    result?: RepairInfo[];
    msg?: string;
}

interface ResNotRepairList {
    '200': OK;
    result?: RepairInfo[];
    msg?: string;
}