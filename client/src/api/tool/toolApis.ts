import axiosInst from '../axiosInst';

export const addTool_API = (tool: Tool) => axiosInst.post<unknown>('/tool/addTool', tool);