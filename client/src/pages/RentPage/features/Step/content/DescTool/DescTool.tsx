import type { FC } from 'react';
import { useStepStore, useTabsStore } from '../../../../../../zustand';
import { getToolsAvailability, getTabName } from '../../../../utils/tables';
import { message } from 'antd';
import Button from '../../../../../../components/Button';
import ToolState from '../../templates/ToolState';

const DescTool: FC = () => {

    const { activeTab } = useTabsStore();
    const { detailTool, setIsModalOpen ,setSystemStep, text, setText } = useStepStore();
 
    const handleRepairStep = () => {        
        setSystemStep('TOOL_REPAIR');
        setIsModalOpen(false);
    }

    const handleRentStep = () => {
        setSystemStep('TOOL_RENT');
        setIsModalOpen(false);
    }

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
                <footer role='modal-footer' className='flex justify-end gap-3'>
                    <Button bgColor='01' onClick={handleRepairStep}>
                        수리 요청
                    </Button>
                    <Button bgColor='01' onClick={handleRentStep} >
                        대여 하기
                    </Button>
                </footer>              
            </div>
        </section>
    );
};

export default DescTool;
