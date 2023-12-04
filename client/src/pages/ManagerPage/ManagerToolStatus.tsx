import { FC, useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import AddEquipmentComponent from './AddEquipment/AddEquipmentComponent';
// interface AddEquipmentModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

const ManagerToolStatus: FC = () => {

  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);
    }
  };

  // const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
  //   setDescription(event.target.value);
  // };

  // const handleAddEquipment = () => {
  
  //   console.log('Adding equipment:', { image, description });
  //   onClose();
  // };

   
    return (
        
        <div className='w-[1300px] h-[750px] mt-[20px] -ml-[50px] bg-02 flex justify-between'>
         <div className='flex flex-col mt-[48px] ml-[80px] space-y-3 '>


{Array.from({ length: 4 }).map((_, index) => (
  <div key={index} className='w-[558px] h-[140px] bg-04 rounded-md'>
    
    <div className='flex items-center'>
      <img className='object-cover mr-4 w-128 h-128' src='' alt='기자재 이미지' />
      <div>
        <h3 className='text-lg font-bold'>기자재명</h3>
        <p className='text-sm'>기자재 설명</p>
      </div>
    </div>
    
  </div>
))}

</div>

{/* 오른쪽 4개 박스 */}
<div className='flex flex-col space-y-3 mt-[48px] mr-[80px]'>
{Array.from({ length: 4 }).map((_, index) => (
  <div key={index} className='w-[558px] h-[140px] bg-04 rounded-md'>
    <div className='flex items-center'>
      <img className='object-cover mr-4 w-128 h-128' src='사진주소' alt='기자재 이미지' />
      <div>
        <h3 className='text-lg font-bold'>기자재명</h3>
        <p className='text-sm'>기자재 설명</p>
      </div>
    </div>
  </div>
))}
</div>

         

          

         <AddEquipmentComponent/>

            <div className='w-[400px] h-[117px] bg-01 rounded-md absolute top-[900px] ml-[450px] '>
            <div className='mt-[30px] ml-[110px] text-[36px] text-04 font-bold'>
                기자재 삭제
            </div>
          
            </div>

            <div className='w-[400px] h-[117px] bg-01 rounded-md absolute top-[900px] ml-[900px] '>
            <div className='mt-[30px] ml-[132px] text-[36px] text-04 font-bold'>
             뒤로가기
            </div>
          
            </div>


        </div>
    );
};

export default ManagerToolStatus;