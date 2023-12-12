import React, { FC, useState, ChangeEvent } from 'react';
import Button from '../../../components/Button';

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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUploadedFiles(Array.from(event.target.files));
      // Assuming only one image is selected
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(imageUrl);
      console.log('Selected Image:', imageUrl);
    }
  };

  const isAddButtonDisabled = () => {
    // Check if any of the required fields is empty
    return (
      !equipmentName ||
      !assetNumber ||
      !equipmentType ||
      !equipmentCode ||
      !purchaseType ||
      !purchaseDate
    );
  };

  const handleAddEquipment = () => {
    // Check if any of the required fields is empty
    if (isAddButtonDisabled()) {
      alert('필수 항목을 모두 입력하세요.');
    }

    // Handle equipment addition logic here
    console.log('Equipment Details:', {
      equipmentName,
      assetNumber,
      equipmentType,
      equipmentCode,
      purchaseType,
      purchaseDate,
      additionalContent,
      uploadedFiles,
    });
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* 모달 내용 */}
          <div className="bg-white rounded-md p-6 w-[980px] h-[450px]">
            <div
              className="w-[270px] h-[270px] border-8 bg-04 border-gay-700 border-dotted"
              style={{ backgroundImage: selectedImage ? `url(${selectedImage})` : 'none' }}
            >
              기자재 추가
            </div>

            <div className="flex mt-[30px] space-x-2">
              {/* 이미지 업로드 버튼 */}
              <label
                htmlFor="imageInput"
                className="custom-file-upload  text-[15px]  px-3 py-2 rounded cursor-pointer"
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

              {/* 엑셀 파일 불러오기 버튼 */}
              <label
                htmlFor="excelInput"
                className="custom-file-upload  text-[15px]  px-4 py-2 rounded cursor-pointer"
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
              {/* 기자재 명칭 입력 */}
              <div className="mb-4 text-[15px]">
                <label htmlFor="equipmentName">기자재 명칭:</label>
                <input
                  type="text"
                  id="equipmentName"
                  value={equipmentName}
                  onChange={(e) => setEquipmentName(e.target.value)}
                />
              </div>

              {/* 자산번호 입력 */}
              <div className="mb-4 text-[15px]">
                <label htmlFor="assetNumber">자산번호:</label>
                <input
                  type="text"
                  id="assetNumber"
                  value={assetNumber}
                  onChange={(e) => setAssetNumber(e.target.value)}
                />
              </div>

              {/* 기자재 종류 선택 */}
              <div className="mb-4 text-[15px]">
                <label htmlFor="equipmentType">기자재 종류:</label>
                <select
                  id="equipmentType"
                  value={equipmentType}
                  onChange={(e) => setEquipmentType(e.target.value)}
                >
                  <option value="선택안함">선택안함</option>
                  <option value="종류1">타블렛</option>
                  <option value="종류2">VR</option>
                  <option value="종류3">종류3</option>
                  {/* 다른 기자재 종류 옵션들 추가 */}
                </select>
              </div>

              {/* 기자재 코드 입력 */}
              <div className="mb-4 text-[15px]">
                <label htmlFor="equipmentCode">기자재 코드:</label>
                <input
                  type="text"
                  id="equipmentCode"
                  value={equipmentCode}
                  onChange={(e) => setEquipmentCode(e.target.value)}
                />
              </div>

              {/* 구입 구분 선택 */}
              <div className="mb-4 text-[15px]">
                <label htmlFor="purchaseType">구입 구분:</label>
                <select
                  id="purchaseType"
                  value={purchaseType}
                  onChange={(e) => setPurchaseType(e.target.value)}
                >
                  <option value="선택안함"></option>
                  <option value="구매">등록금</option>
                  {/* 다른 구입 구분 옵션들 추가 */}
                </select>
              </div>

              {/* 구매 날짜 입력 */}
              <div className="mb-4 text-[15px]">
                <label htmlFor="purchaseDate">구매 날짜:</label>
                <input
                  type="date"
                  id="purchaseDate"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                />
              </div>
            </div>

            {/* 추가 내용 전송 버튼 */}
            <div className="flex mt-[130px]">
              <Button onClick={onClose} bgColor="01" className="ml-[705px]">
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