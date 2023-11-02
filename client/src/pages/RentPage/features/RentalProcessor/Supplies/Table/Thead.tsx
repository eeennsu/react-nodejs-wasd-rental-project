import type { FC } from 'react';
import { useTabsStore } from '../../../../../../zustand';

const Thead: FC = ({  }) => {

    const { activeTab } = useTabsStore();

    return (
        <thead>
            <tr className='w-full'>
                {
                    (activeTab === 0 || activeTab === 1) ? (
                        <>
                            <th className='w-2/12'>
                                번호
                            </th>
                            <th className='w-2/12'>
                                코드
                            </th>
                            <th className='w-2/12'>
                                품명
                            </th>
                            <th>
                                자산번호
                            </th>
                            <th>
                                기자재 상태
                            </th>
                        </>
                    ) : (
                        <>
                            
                        </>
                    )
                }
               
            </tr>
        </thead>
    );
};

export default Thead;