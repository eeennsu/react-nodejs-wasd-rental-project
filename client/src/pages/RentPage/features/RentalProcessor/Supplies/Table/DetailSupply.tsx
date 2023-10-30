import type { FC } from 'react';
import { useDetailSupplyStore, useTabsStore } from '../../../../../../zustand';

const DetailSupply: FC = () => {

    const { activeTab } = useTabsStore();
    const { detailSupply } = useDetailSupplyStore();

    return (
        <div className='flex flex-col md:h-[580px] px-16'>
            <div className='flex items-center justify-center h-full gap-6'>
                <div className='flex h-full '>
                    <img src='http://via.placeholder.com/1000x1500' className='object-contain' />
                </div>
                <div className='flex flex-col h-full py-32 '>
                    <div className='text-2xl'>
                        <span className='font-bold'>
                            {activeTab === 0 ? 'VR' : activeTab === 1 ? 'Tablet' : activeTab === 2 ? '강의실' : null}
                        </span>
                        <span className='mx-4'>
                            /
                        </span>
                        <span className={`${detailSupply.isAvailable ? 'text-blue-500' : 'text-red-300'} font-semibold text-lg`}>
                            {
                                detailSupply.isAvailable ? '대여 가능' : '대여 불가'
                            }
                        </span>                                             
                    </div>
                    <p className='mt-6'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo nesciunt laborum modi quod, molestias eveniet consectetur animi quos provident saepe repudiandae excepturi dignissimos atque natus nam consequatur exercitationem similique. Corporis cupiditate velit ad asperiores laudantium, fuga ab alias blanditiis nulla nesciunt autem quas sunt ipsum distinctio veritatis eum illo. Lorem30
                    </p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default DetailSupply;