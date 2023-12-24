const regex = /\d+번/;

export const getToolNum = (tool: Partial<Tool>) => {

    const match = tool.tool_name !== '강의실' && tool.tool_content?.match(regex);

    const result = tool.tool_name === '강의실' ? tool.tool_id : match;

    return result;
}