import type { FC } from 'react';
import { useTabsStore } from '../../../../../../zustand';

const Thead: FC = ({  }) => {

    const { activeTab } = useTabsStore();

    return (
        <thead>
            <tr className='w-full'>
                {/* {
                    (activeTab === 1 || activeTab === 2) ? (
                        <>
                            <th className='w-1/5'>
                                번호
                            </th>
                            <th className='w-1/5'>
                                코드
                            </th>
                            <th className='w-1/5'>
                                품명
                            </th>
                            <th className='w-1/5'>
                                자산번호
                            </th>
                            <th className='w-1/5'>
                                기자재 상태
                            </th>
                        </>
                    ) : (activeTab === 3) && (
                        <>
                            <th className='w-1/3'>
                                이름
                            </th>
                            <th className='w-1/3'>
                                코드
                            </th>
                            <th className='w-1/3'>
                                상태
                            </th> 
                        </>
                    )
                }                */}
                <th className='w-1/3'>
                    번호
                </th>
                <th className='w-1/3'>
                    이름
                </th>
                <th className='w-1/3'>
                    대여여부
                </th>
            </tr>
        </thead>
    );
};

export default Thead;