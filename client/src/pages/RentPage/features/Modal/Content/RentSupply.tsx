import type { FC } from 'react';
import ModalTemplate from '../Template';
import { useModalStore, useTabsStore } from '../../../../../zustand';
import { getTabName } from '../../../utils/tables';

const RentSupply: FC = () => { 

    const { activeTab } = useTabsStore();
    const { detailTool } = useModalStore()

    return (
        <ModalTemplate className='flex items-center justify-center'>
            <div className='grid w-7/12 h-full grid-rows-3 bg-red-600'>
                <div className='flex w-full '>
                    <div className='w-1/2'>
                        <img src='http://via.placeholder.com/300x200' className='object-cover w-full h-full' />
                    </div>
                    <div className='flex flex-col items-center w-1/2 bg-amber-500'>
                        <h2 className=''>
                            {getTabName(activeTab)}
                        </h2>
                        <p>
                            {detailTool.tool_name}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nesciunt rem tenetur sint, repellendus voluptatum modi corrupti iusto, amet quasi minima reprehenderit nulla velit consequuntur? Deleniti iusto laborum qui labore.
                        </p>
                    </div>
                </div>
                <div className='bg-yellow-200'>

                </div>
                <div className='bg-red-300'>

                </div>
            </div>
            <div className='w-5/12 h-full bg-zinc-300'>

            </div>
        </ModalTemplate>
    );
};

export default RentSupply;