import { AxiosError, AxiosResponse } from 'axios';
import axiosInst from '../axiosInst';

export const getTools_API = () => axiosInst.get<Tool[]>('/tools');

export const getLectureRooms_API = () => axiosInst.get<LectureRoom[]>('/lectureRooms');