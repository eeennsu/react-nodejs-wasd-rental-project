import type { FC, ChangeEvent, FormEvent } from 'react';
import { useState, useMemo } from 'react';
import { Image, Input, Select, message } from 'antd';
import { useStepStore, useTabsStore, useToolStore, useUserStore } from '../../../../../../zustand';
import { repairResons } from '../../../../constants';
import { shallow } from 'zustand/shallow';
import { getImgURL } from '../../../../utils/step';
import { repairTool_API } from '../../../../../../api/repair/repairApi';
import { getDateFormat, getStrDateFormat } from '../../../../utils/timePicker';
import Template from '../../templates/Template';
import Button from '../../../../../../components/Button';
import useStoreController from '../../../../../../hooks/commons/useStoreController';
import Paragraph from '../DescTool/Paragraph';

const { TextArea } = Input;

const RepairTool: FC = () => {

    const activeTab = useTabsStore(state => state.activeTab);
    const user_id = useUserStore(state => state.user?.user_id);
    const { text, setText } = useStepStore(state => ({
        text: state.text,
        setText: state.setText
    }), shallow);

    const { tool, setTool, toolImg } = useToolStore(state => ({
        tool: state.tool, setTool: state.setTool, toolImg: state.toolImg,
    }), shallow);
    
    const { setStepInit } = useStoreController();

    const [resonSelect, setResonSelect] = useState<string | null>(null);
    
    const renderOptions =  useMemo(() => (repairResons.map((reson) => ({
        label: reson,
        value: reson
    }))), [repairResons]);

    const handleSelectChange = (value: string) => {
        setResonSelect(value);
    }
    console.log(tool);
    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const handleRepairRequest = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            
        if (!resonSelect) {
            message.warning('수리 목록을 선택해주세요.');

            return;
        }

        if (text.length <= 0) {
            message.warning('수리 사유를 입력해주세요.');

            return;
        }

        try {
            fetchRepairTool();        
        } catch (error) {
            console.log(error);
            message.error('서버 에러가 발생하였습니다. 괸리자에게 문의해 주세요');
        } finally {
            handleBack();
        }
    }

    const fetchRepairTool = async () => {
        if (user_id && tool?.tool_id) {
            const repairData: RepairTool = {
                user_id: user_id,
                tool_id: tool.tool_id,
                repair_part: resonSelect!,
                repair_reason: text
            }; 

            const response = await repairTool_API(repairData);

            if (response.data['200'] === 'OK') {
                message.success('수리 요청이 완료되었습니다');    
            } else {
                message.error('수리 요청에 실패하였습니다! 관리자에게 문의해 주세요');
            }
        } else {
            message.error('프론트 오류가 발생하였습니다. 관리자에게 문의해 주세요!');
        }         
    }

    const handleBack = () => {
        setStepInit(activeTab);
        setTool(null);
    }
 
    return (
        <Template className='mt-[74px]'>
            <div className='flex w-full gap-16 max-md:flex-col'>
                <div className='flex flex-col gap-8 max-md:items-center'>
                    <div>
                        <Image src={getImgURL(toolImg!.img_url)} alt='이미지' width={380} height={360} className='bg-slate-300 rounded-[4px] shadow-xl' />    
                    </div>                            
                    <div className='flex flex-col w-full gap-4'>
                        <p className='text-xl font-bold max-md:text-center'>
                            {tool?.tool_content}
                        </p>
                        <div className='flex flex-col max-md:text-center'>
                            <Paragraph title='standard' text={tool?.tool_standard} />
                            <Paragraph title='기자재 상태' text={tool?.tool_state} />  
                            <Paragraph title='기자재 사양' text={tool?.tool_spec} />                     
                            <Paragraph title='기자재 용도' text={tool?.tool_division} />                     
                            <Paragraph title='구매 출처' text={tool?.tool_purchase_division} />  
                            <Paragraph title='구매 날짜' text={getStrDateFormat(tool?.tool_purchase_date)} />
                            <Paragraph title='업데이트 날짜' text={getDateFormat(tool?.tool_update_at)} />  
                        </div>
                    </div>
                </div>
                <form className='flex flex-col w-full gap-6 md:gap-10' onSubmit={handleRepairRequest}>
                    <div className='flex flex-col items-end bg-01 rounded-[4px] max-md:mx-4'>
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
                                classNames={{ textarea: 'w-full h-full p-3 rounded-none' }} 
                                value={text} 
                                onChange={handleTextChange} 
                                style={{ resize: 'none' }}  
                                placeholder='수리할 내용을 입력해주세요' 
                                rows={23} 
                            />
                        </div>      
                    </div>                
                    <footer className='flex justify-center gap-4 md:justify-end max-md:mb-5'>
                        <Button onClick={handleBack} bgColor='02'>
                            돌아가기
                        </Button>
                        <Button type='submit' bgColor='01'>
                            수리 요청
                        </Button>    
                    </footer>
                </form>            
            </div>              
        </Template>
    );
}

export default RepairTool;