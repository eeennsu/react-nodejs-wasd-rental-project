import type { FC } from 'react';
import { useModalStore, useTabsStore } from '../../../../../zustand';
import ModalTemplate from '../Template';

const DescSupply: FC = () => {

    const { activeTab } = useTabsStore();
    const { detailSupply } = useModalStore();    

    return (
        <ModalTemplate className='grid content-center grid-cols-3 gap-6'>
            <div>
                <img src='http://via.placeholder.com/400x600' className='object-contain' />   
            </div>                
            <div className='flex flex-col justify-center h-full col-span-2 gap-10'>
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
                <p className='text-lg'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo nesciunt laborum modi quod, molestias eveniet consectetur animi quos provident saepe repudiandae excepturi dignissimos atque natus nam consequatur exercitationem similique. Corporis cupiditate velit ad asperiores laudantium, fuga ab alias blanditiis nulla nesciunt autem quas sunt ipsum distinctio veritatis eum illo. Lorem30
                </p>
            </div>    
        </ModalTemplate>
    );
};

export default DescSupply;