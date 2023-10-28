import axiosInst from '../axiosInst';

export const getVRs_API = () => axiosInst.get<VR[]>('/vrs');

export const getTablets_API = () => axiosInst.get<Tablet[]>('/tablets');

export const getLectureRooms_API = () => axiosInst.get<LectureRoom[]>('/lectureRooms');