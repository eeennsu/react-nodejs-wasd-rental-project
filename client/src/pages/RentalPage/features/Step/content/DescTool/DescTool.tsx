import type { FC } from 'react';
import { useStepStore, useTabsStore } from  '../../../../../../zustand';
import { getTabName } from  '../../../../utils/tables';
import ToolState from '../../templates/ToolState';
import DescToolButtons from './DescToolButtons';

const DescTool: FC = () => {

    const { activeTab } = useTabsStore();
    const { detailTool } = useStepStore();
 
    return (
        <section className='md:h-[480px] grid grid-cols-2 gap-5'>
            <div className='bg-slate-200'>
                {/* <img src='http://via.placeholder.com/418x524' className='object-cover' />    */}
            </div>              
            <div className='flex flex-col justify-between '>
                <div className='mt-10'>
                    <h3 className='font-[800] text-lg'>
                        {getTabName(activeTab)}
                    </h3>
                    <ToolState status={detailTool?.tool_state} />
                    <p className='mt-4 font-[800]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam, laboriosam ipsum eum quasi cumque corporis temporibus accusamus cupiditate reprehenderit dignissimos qui vero tempora natus harum quos nam quibusdam facere! Iure exercitationem quidem assumenda soluta natus, eligendi minima sunt, laborum rerum illum eum. Beatae numquam ea tenetur. Soluta, repellat commodi.
                    </p>
                </div>
                <DescToolButtons />            
            </div>
        </section>
    );
};

export default DescTool;
