import type { FC } from 'react';
import { useTabsStore } from '../../../../../../zustand';

const Thead: FC = ({  }) => {

    const { activeTab } = useTabsStore();

    return (
        <thead>
            <tr className='w-full'>
                <th className='w-2/12'>
                    {
                        activeTab === 0 || activeTab === 1 ? '코드' : '이름'
                    }
                </th>
                <th className='w-8/12'>
                    {
                        activeTab === 0 || activeTab === 1 ? '번호' : '설명'
                    }
                </th>
                <th className='w-2/12'>
                    사용 여부
                </th>
            </tr>
        </thead>
    );
};

export default Thead;