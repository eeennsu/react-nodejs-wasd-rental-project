const regex = /\d+번/;

export const getToolNum = (rentalInfo: RentalInfo) => {

    const match = rentalInfo.tool.tool_name !== '강의실' && rentalInfo.tool.tool_content?.match(regex);
    
    const result = rentalInfo.tool.tool_name === '강의실' ? rentalInfo.tool_id : match;

    return result;
}

export const getToolNum2 = (tool: Tool) => {
    const match = tool.tool_name !== '강의실' && tool.tool_content?.match(regex);
    
    const result = tool.tool_name === '강의실' ? tool.tool_id : match;

    return result;
}