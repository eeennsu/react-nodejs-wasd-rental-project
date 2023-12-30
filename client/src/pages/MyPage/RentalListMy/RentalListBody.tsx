import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import { useUserStore } from '../../../zustand';
import type { FC } from 'react';
import { extensionTool_API, myAllRentalList_API_MY_PAGE, returnClassRoom_API, returnTool_API } from '../../../api/rental/rentalApi';
import Pagination from '../../../components/Pagination/Pagination';
import { getToolNum } from '../../RentalPage/utils/getToolNum';

const RentalListBody: FC = () => {

  const [rentalRecords, setRentalRecords] = useState<Array<{ D_day: string; result: RentalInfo }>>([]);
  const [curPage, setCurPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const user_id = useUserStore(state => state.user?.user_id);

  useEffect(() => {
    const fetchRentalRecords = async () => {
        try {
            const { data } =  await myAllRentalList_API_MY_PAGE(user_id as string, curPage);

            if (data.result && data.total) {
                setRentalRecords(data.result);
                setTotal(data.total);
            } 
            
        } catch (error) {
            console.log(error);
            alert('유저의 현재 대여 목록을 가져오는데 실패했습니다!');
        }
    };

    fetchRentalRecords(); 
  }, [curPage]);

  return (
    <div className='flex flex-col w-full px-5 pt-6 rounded-md bg-02 min-h-[576px]'>
        <div className='flex flex-col flex-1 w-full px-10'>
            {
                rentalRecords?.map(({ result }) => (
                    <MyRentalRecord key={result?.rental_id} rentalInfo={result} userId={user_id as string} />                 
                ))
            }
        </div>
        <div className='flex justify-center py-5'>
            <Pagination curPage={curPage} setCurPage={setCurPage} total={total} color='bg-03/70' />
        </div>
    </div>
  );
};

export default RentalListBody;



const MyRentalRecord: FC<{ rentalInfo: RentalInfo, userId: string }> = ({ rentalInfo, userId }) => {

    const isClassroom = rentalInfo.tool.tool_name === '강의실';

    const handleToolExtention = async () => {
        const { data } = await extensionTool_API({ tool_id: rentalInfo.tool_id });

        if (data.result) {
            alert('일주일 연장되었습니다.');
        } else if (data.err){
            alert(data.err);
        }
    }

    const handleToolReturn = async () => {
        const { data } = await returnTool_API({ tool_id: rentalInfo.tool_id, user_id: userId });

        if (data[200] && data.result) {
            alert('반납을 완료했습니다.');
        } else if (data.err) {
            alert(data.err);
            console.log(data.err);
        }
    }

    const handleRoomExtention = () => {
        alert('강의실 대여는 연장이 불가합니다.');
    }

    const handleRoomReturn = async () => {
        const { data } = await returnClassRoom_API({ rental_id: String(rentalInfo.rental_id), tool_id: String(rentalInfo.rental_id), user_id: userId });
    
        if (data[200] && data.result) {
            alert(data.result.log_content);
            console.log(data.result);
        }
    }

    return (
        <div key={rentalInfo.rental_id} className='flex items-center justify-center w-full gap-4 py-1.5 rounded-md'>
            <div className='flex items-center justify-center w-3/4 font-bold text-black rounded-sm2 h-9 bg-03'>
                <span>
                    {getToolNum(rentalInfo)}
                </span>
                <span className='px-2'>
                    /
                </span>
                <span>
                    {rentalInfo?.tool.tool_name}
                </span>
                <span className='px-2'>
                    /
                </span>
                <span>
                    {rentalInfo?.tool.tool_state}
                </span>
            </div>
            <div className=''>
                <Button bgColor='01' className='min-w-[0px] w-16' onClick={isClassroom ? handleRoomExtention : handleToolExtention}>
                    연장
                </Button>
            </div>
            <div className=''>
                <Button bgColor='01' className='min-w-[0px] w-16' onClick={isClassroom ? handleRoomReturn : handleToolReturn}>
                    반납
                </Button>
            </div>           
        </div>
    );
}