import type { FC } from 'react';
import { useUserStore } from '../../../zustand';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import { myRepairList_API } from '../../../api/repair/repairApi';
import dayjs from 'dayjs';

const RequestMy: FC = () => {

    const userId = useUserStore(state => state.user?.user_id);
    const [myRepairList, setMyRepairList] = useState<RepairInfoDetail[]>([]);

    useEffect(() => {
        if (!userId) return;

        (async () => {
            const { data } = await myRepairList_API(userId);

            if (data[200] && data.result) {
                setMyRepairList(data.result);
            } else {
                alert('사용자의 수리 요청 목록을 불러오는데 실패했습니다.');
            }
        }
        )();
    }, [userId]);

    return(

        <div className='flex flex-col w-3/4 rounded-xl bg-02  max-h-[187px] overflow-y-auto'>
            {
                myRepairList.map((data) => (
                    <MyReapair key={data.repair_id} myReapir={data} />
                ))
            }        
        </div>
    );
}

export default RequestMy;



const MyReapair: FC<{ myReapir: RepairInfoDetail }> = ({ myReapir }) => {

    return (
        <div className='flex justify-between px-10 py-2 border-b-[1px] items-center min-h-[48px]'>
            <div className='flex-1 font-semibold'>
                {myReapir.repair_part}
            </div>
            <div className='flex-1 text-center'>
                {myReapir.repair_state === '수리완료' ? (
                    <span className='px-3 py-1 text-white rounded-md bg-01'>
                        승인
                    </span>
                ) : (
                    <span className='px-3 py-1 text-white rounded-md bg-slate-500/80'>
                        미승인
                    </span>
                )}
            </div>
            <div className='flex-1 font-semibold text-right'>
                {dayjs(new Date(myReapir.repair_create_at)).format('YYYY-MM-DD')}
            </div>
        </div>
    );
}