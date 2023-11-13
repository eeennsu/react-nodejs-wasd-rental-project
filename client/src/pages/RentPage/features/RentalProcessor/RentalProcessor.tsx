import type { FC } from 'react';
import { useEffect } from 'react';
import { useSuppliesStore } from '../../../../zustand';
import Search from './Search/Search';
import Supplies from './Supplies/Supplies';
import useFetchAllSupplies from '../../../../hooks/test/useFetchAllSupplies';
import Template from '../Step/templates/Template';

const RentalProcessor: FC = () => {

    const { VRsData, setVRsData, tabletsData, setTabletsData, lectureRoomsData, setLectureRoomsData } = useSuppliesStore();
    const results = useFetchAllSupplies();
    const isAnyoneLoading = results.some(result => result.isLoading);

    useEffect(() => {
        if (!isAnyoneLoading) {
            const tools = results[0].data?.data;
            const lectureRooms = results[1].data?.data;

            if (tools && lectureRooms) {   
                setVRsData(tools?.filter((tool) => tool.tool_division === 'VR'));
                setTabletsData(tools?.filter((tool) => tool.tool_division === 'TABLET'));
                setLectureRoomsData(lectureRooms);
            }
        }      
    }, [isAnyoneLoading]);

    // useEffect(() => {
    //     console.log('VRsData', VRsData);
    //     console.log('tabletsData', tabletsData);
    //     console.log('lectureRoomsData', lectureRoomsData);
    // }, [VRsData, tabletsData, lectureRoomsData]);

    return (
        <Template className='flex flex-col-reverse mt-8 md:flex-col md:mt-14'>
            <section className='flex justify-end px-6 pb-6 md:p-0'>
                <Search />
            </section>          
            <section className='w-11/12 mx-auto md:w-full md:mx-0'>
                <Supplies isAnyoneLoading={isAnyoneLoading} />
            </section>        
        </Template>
    );
};

export default RentalProcessor;