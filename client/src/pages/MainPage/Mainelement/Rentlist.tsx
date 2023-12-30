import type { FC } from 'react';

import { notRentalToolCount_API, rentalToolCount_API, viewTools_API } from '../../../api/tool/toolApi';
import VrsInfo from './VrsInfo';
import TabletsInfo from './TabletsInfo';
import RoomsInfo from './RoomsInfo';

const Rentlist: FC = () => {
      
    // const [vrDisableCount, setVrDisAbleCount] = useState<number>();
    // const [tabletAbleCount, setTabletAbleCount] = useState<number>();
    // const [tabletDisableCount, setTabletDisAbleCount] = useState<number>();
    // const [roomAbleCount, setRoomAbleCount] = useState<number>();
    // const [roomDisableCount, setRoomDisAbleCount] = useState<number>();

    // useEffect(() => {
    //     (async () => {
    //         const { data: vrAbleCount } = await rentalToolCount_API('VR 실습기기');
    //         const { data: vrDisableCount } = await notRentalToolCount_API('VR 실습기기');
    //     })();
    // }, []);

    return (
        <section className='absolute left-0 right-0 flex max-w-5xl pt-6 pb-8 mx-auto text-white bg-01 -bottom-36'>
            <div className='flex flex-col items-center flex-1 gap-6 font-light'>
                <h2>오큘러스</h2>
                <div className='flex flex-col items-center justify-center w-full'>
                    <VrsInfo />
                </div>
            </div>
            <div className='flex flex-col items-center flex-1 gap-6 font-light'>
                <h2>타블렛</h2>
                <div className='flex flex-col items-center justify-center w-full'>
                    <TabletsInfo />
                </div>
            </div>
            <div className='flex flex-col items-center flex-1 gap-6 font-light'>
                <h2>강의실</h2>
                <div className='flex flex-col items-center justify-center w-full'>
                    <RoomsInfo />
                </div>
            </div>
        </section>
    );
};

export default Rentlist;