import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import Button from '../../../components/Button';
import {addTool_API} from '../../../api/tool/toolApi';

interface ModalAddProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: FC<ModalAddProps> = ({ isOpen, onClose }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [additionalContent, setAdditionalContent] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [equipmentName, setEquipmentName] = useState<string>('');
  const [assetNumber, setAssetNumber] = useState<string>('');
  const [equipmentType, setEquipmentType] = useState<string>('');
  const [equipmentCode, setEquipmentCode] = useState<string>('');
  const [purchaseType, setPurchaseType] = useState<string>('');
  const [purchaseDate, setPurchaseDate] = useState<string>('');
  const [toolStandard, setToolStandard] = useState<string>('');
  const [toolState, setToolState] = useState<string>('');
  const [toolSpec, setToolSpec] = useState<string>('');

  const currentDate = new Date();
    const isoDate = currentDate.toISOString();





  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imageFile = event.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      const image = new Image();

      image.onload = () => {
        setSelectedImage(imageUrl);
      };

      image.src = imageUrl;
      console.log('Selected Image:', imageUrl);
    }
  };
  const isAddButtonDisabled = () => {
    return (
      !equipmentName ||
      !assetNumber ||
      !equipmentType ||
      !equipmentCode ||
      !purchaseType ||
      !purchaseDate ||
      !toolStandard ||
      !toolState ||
      !additionalContent ||
      !toolSpec 

    );
  };

  const handleAddEquipment = async () => {
    if (isAddButtonDisabled()) {
      alert('필수 항목을 모두 입력하세요.');
      return;
    }

    const imageId = uploadedFiles.length + 1;


    // const tool = {
    //   department_id: '1',
    //   tool_code: equipmentCode,
    //   tool_content: additionalContent,
    //   tool_division: equipmentType, 
    //   tool_id: assetNumber, 
    //   tool_name: equipmentName,
    //   tool_purchase_date: purchaseDate,
    //   tool_purchase_division: purchaseType,
    //   tool_spec: toolSpec,
    //   tool_standard: toolStandard, 
    //   tool_state: toolState,
    //   tool_update_at: isoDate,
    //   img_id: imageId.toString(),
    //   img_url: selectedImage || '',
    // };



    useEffect(() => {
      const uploadedFiles = async (tool: Tool) => {
        try {
          const response = await addTool_API(tool);
          const results = response.data.result;
          console.log(results, '데이터 전송 성공');
        } catch (error) {
          console.error('데이터 전송 실패:', error);
        }
      };
  
      // uploadedFiles()
    
    }, []); 


    console.log('Equipment Details:');
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white rounded-md p-6 w-[980px] h-[700px] z-[99]">
            <div className="w-[270px] h-[270px] border-8 bg-04 border-gay-700 border-dotted relative overflow-hidden">
              {selectedImage && (
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={selectedImage}
                  alt="기자재 추가"
                />
              )}
              {!selectedImage && (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  기자재 추가
                </div>
              )}
            </div>

            <div className="flex mt-[30px] space-x-2">
              <label
                htmlFor="imageInput"
                className="custom-file-upload text-[15px] px-3 py-2 rounded cursor-pointer"
              >
                이미지 파일 불러오기
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleFileChange}
                  multiple={false}
                  className="opacity-0 absolute top-0 left-0 w-[15px] h-[15px] cursor-pointer"
                />
              </label>

              <label
                htmlFor="excelInput"
                className="custom-file-upload text-[15px] px-4 py-2 rounded cursor-pointer"
              >
                Excel로 받기
                <input
                  type="file"
                  id="excelInput"
                  accept=".xlsx, .xls"
                  onChange={handleFileChange}
                  multiple={false}
                  className="opacity-0 absolute top-0 left-0 w-[15px] h-[15px] cursor-pointer"
                />
              </label>
            </div>

            <div className="ml-[300px] -mt-[320px] ">
              <div className="mb-4 text-[15px]">
                <label htmlFor="tool_name">품명:</label>
                <select
                  id="tool_name"
                  value={equipmentName}
                  onChange={(e) => setEquipmentName(e.target.value)}
                >

                  <option value="타블렛">타블렛</option>
                  <option value="VR">VR</option>
                  <option value="종류3">종류3</option>
                  </select>
              </div>

              <div className="mb-4 text-[15px]">
                <label htmlFor="tool_id">자산번호:</label>
                <input
                  type="text"
                  id="tool_id"
                  value={assetNumber}
                  onChange={(e) => setAssetNumber(e.target.value)}
                />
              </div>

              <div className="mb-4 text-[15px]">
                <label htmlFor="tool_division">구입 구분:</label>
                <select
                  id="tool_division"
                  value={equipmentType}
                  onChange={(e) => setEquipmentType(e.target.value)}
                >
                  <option value="선택안함"></option>
                  <option value="교육용기자재">교육용기자재</option>

                 
                </select>
              </div>

              <div className="mb-4 text-[15px]">
                <label htmlFor="tool_code">기자재 코드:</label>
                <input
                  type="text"
                  id="tool_code"
                  value={equipmentCode}
                  onChange={(e) => setEquipmentCode(e.target.value)}
                />
              </div>

              <div className="mb-4 text-[15px]">
                <label htmlFor="tool_purchase_division">구입 구분:</label>
                <select
                  id="tool_purchase_division"
                  value={purchaseType}
                  onChange={(e) => setPurchaseType(e.target.value)}
                >
                  <option value="선택안함"></option>
                  <option value="교비(등록금)">교비(등록금)</option>
                </select>
              </div>

              <div className="mb-4 text-[15px]">
                <label htmlFor="tool_purchase_date">구매 날짜:</label>
                <input
                  type="date"
                  id="tool_purchase_date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                />
              </div>


  {/* 대여 여부 선택 */}
  <div className="mb-4 text-[15px]">
    <label htmlFor="tool_state">대여 여부:</label>
    <select
      id="tool_state"
      value={toolState}
      onChange={(e) => setToolState(e.target.value)}
    >
      {/* 대여 여부 옵션들 추가 */}   
                 <option value="선택안함"></option>
                  <option value="대여 가능">대여 가능</option>
                  <option value="보류">보류</option>
                  <option value="대여 불가능">대여 불가능</option>
    </select>
  </div>


  <div className="mb-4 text-[15px]">
                <label htmlFor="tool_standard">품목 규격:</label>
                <select
                  id="tool_standard"
                  value={toolStandard}
                  onChange={(e) => setToolStandard(e.target.value)}
                >
                  <option value="선택안함"></option>
                  <option value="규격1">1</option>
                  <option value="규격2">2</option>
                  <option value="규격3">3</option>

                </select>
              </div>
                {/* 기자재 설명 입력 */}
  <div className="mb-4 text-[15px]">
    <label htmlFor="tool_content">기자재 설명:</label>
    <input
      type="text"
      id="tool_content"
      value={additionalContent}
      onChange={(e) => setAdditionalContent(e.target.value)}
    />
  </div>


  {/* 기자재 사양 입력 */}
  <div className="mb-4 text-[15px]">
    <label htmlFor="tool_spec">기자재 사양:</label>
    <input
      type="text"
      id="tool_spec"
      value={toolSpec}
      onChange={(e) => setToolSpec(e.target.value)}
    />
  </div>
            </div>

            <div className="flex mt-[130px]">
              <Button onClick={onClose} bgColor="02" className="ml-[705px]">
                뒤로가기
              </Button>
              <Button
                onClick={handleAddEquipment}
                bgColor="01"
                className="ml-[10px]"
                disabled={isAddButtonDisabled()}
              >
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