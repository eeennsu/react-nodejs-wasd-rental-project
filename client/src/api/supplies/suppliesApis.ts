import { axiosInstJsonServer } from '../axiosInst';

export const getTools_API = () => axiosInstJsonServer.get<Tool[]>('/tools');

export const getLectureRooms_API = () => axiosInstJsonServer.get<LectureRoom[]>('/lectureRooms');