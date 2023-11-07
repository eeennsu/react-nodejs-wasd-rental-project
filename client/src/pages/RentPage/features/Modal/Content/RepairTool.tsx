import type { ChangeEvent, FC } from 'react';
import { useRef, useState } from 'react';
import ModalTemplate from '../templates/ModalTemplate';
import { Input, Select, message } from 'antd';
import Button from '../../../../../components/Button';
import { useModalStore, useTabsStore } from '../../../../../zustand';
import { initModalStep } from '../../../utils/modal';
import { repairResons } from '../../../constants';

const { TextArea } = Input;

const RepairSupply: FC = () => {
    
    const { activeTab } = useTabsStore();
    const { detailTool, setIsModalOpen ,setModalStep, text, setText } = useModalStore();

    const [resonSelect, setResonSelect] = useState<string>(repairResons[0]);

    const handleSelectChange = (value: string) => {
        setResonSelect(value);
    }

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const renderOptions = repairResons.map((reson) => ({
        label: reson,
        value: reson
    }));

    const handleRepairRequest = () => {
        try {
            // API 호출

            //
            message.success('수리 요청이 완료되었습니다');    
        } catch (error) {
            console.log(error);
            message.error('알수 없는 에러가 발생했습니다. 괸라자에게 문의해주세요');
        } finally {
            setIsModalOpen(false);
            initModalStep(activeTab, setModalStep);  
            setText('');
        }
    }

    return (
        <ModalTemplate className='grid grid-cols-2 gap-5 p-4'>
            {/* <div className='flex items-center w-full '>
                <div className='w-2/5'>
                    <img src='http://via.placeholder.com/300x200' className='object-contain' />  
                </div>
                <p className='w-3/5'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nulla veniam facilis laboriosam fuga amet enim obcaecati quis, consectetur molestiae placeat iusto dolores quibusdam neque. Cumque est eos laudantium delectus ratione excepturi deserunt dolorum illum blanditiis enim, amet officia quam maiores qui voluptatibus perspiciatis, voluptatem eaque praesentium? Molestias, dolorem iure!             
                </p>                 
            </div>                
            <div className='flex flex-col gap-4'>
                <div className='w-full'>
                    <select className='w-24 border border-neutral-400 bg-inherit'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>
                <TextArea rows={6} style={{ resize: 'none' }} className='p-3' placeholder='수리할 내용을 입력해주세요' />           
            </div>    */}
            <div className='flex flex-col gap-4'>
                <div className='w-full h-2/3 bg-slate-400 rounded-[4px]' />
                <p>
                    {detailTool?.tool_spec}  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nulla eligendi natus repellendus aliquam, placeat quisquam debitis! Ea facilis officiis ex omnis officia, fugit dicta rerum quasi numquam fuga a!
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col items-end bg-01 rounded-[4px]'>
                    <div className='w-28 h-full my-3.5 mr-3.5'>
                        <Select                      
                            placeholder='목록'
                            onChange={handleSelectChange}
                            options={renderOptions}
                            size='small'
                            className='w-full'                    
                            dropdownStyle={{ overflow: 'hidden', textOverflow: 'ellipsis' }}               
                        />
                    </div>
                    <div className='w-full px-3.5 pb-3.5'>
                        <TextArea 
                            classNames={{ textarea: 'w-full h-full p-3', }} 
                            value={text} 
                            onChange={handleTextChange} 
                            style={{ resize: 'none' }}  
                            placeholder='수리할 내용을 입력해주세요' 
                            rows={14} 
                        />
                    </div>      
                </div>                
                <footer role='modal-footer' className='flex justify-end gap-3'>
                    <Button onClick={handleRepairRequest} bgColor='01'>
                        수리 요청
                    </Button>    
                </footer>
            </div>              
        </ModalTemplate>
    );
}

export default RepairSupply;


{/* <footer role='modal-footer' className='flex justify-end gap-3'>
<Button onClick={handleRepairRequest} bgColor='01'>
    수리 요청
</Button>    
</footer>   */}