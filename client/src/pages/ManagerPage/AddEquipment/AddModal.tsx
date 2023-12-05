import React, { FC, useState } from 'react';
import Button from '../../../components/Button';

interface ModaladdProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: FC<ModaladdProps> = ({ isOpen, onClose }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [additionalContent, setAdditionalContent] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedFiles(Array.from(event.target.files));
    }
  };

  const handleFileUpload = () => {
    // Handle upload logic here
    console.log('Uploaded Files:', uploadedFiles);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* 모달 내용 */}
          <div className="bg-white rounded-md p-6 w-[980px] h-[400px]">
            <div className="w-[270px] h-[270px] border-8 bg-04 border-gay-700 border-dotted">기자재 추가</div>

            {/* 이미지 업로드 버튼 */}
            <div className="mt-[10px] text-[12px] pb-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                multiple
              />
              <p>
                이미지 불러오기
              </p>
            </div>

            {/* 엑셀 파일 불러오기 버튼 */}
            <div className="mb-4 text-[12px]">
            
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                multiple
              />
                <p>
                엑셀 파일 불러오기
              </p>
            </div>

            {/* 텍스트 창 */}

            <div className='ml-[290px] -mt-[380px]' bg-01> 
            <textarea
              value={additionalContent}
              onChange={(e) => setAdditionalContent(e.target.value)}
              placeholder="추가 내용을 입력하세요."
              className="w-[630px] h-[270px] bg-03 mb-4 p-6 resize-none overflow-auto"
            />

</div>

            {/* 닫기 버튼 */}
            {/* <button 
              onClick={onClose}
              className="ml-[940px] -mt-[400px]">
              x
            </button> */}

            <div className="flex mt-[20px]">
            <Button 
             onClick={onClose}
             bgColor='01' className='ml-[705px] '>
                 뒤로가기
          </Button>
          
            {/* 추가 내용 전송 버튼 (임시로 예시 버튼) */}
          <Button 
          onClick={onClose}
          bgColor='01' className='ml-[10px] '>
                 추가하기
          </Button>
            </div>

        
          </div>
        </div>
      )}
    </div>
  );
};

export default AddModal;