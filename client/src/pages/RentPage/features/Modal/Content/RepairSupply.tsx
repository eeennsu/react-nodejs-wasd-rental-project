import type { FC } from 'react';
import { useRef } from 'react';
import ModalTemplate from '../Template';

const RepairSupply: FC = () => {
    
    const refRepairText = useRef<HTMLTextAreaElement | null>(null);

    return (
        <ModalTemplate className='flex flex-col justify-center w-full gap-10'>
            <div className='flex items-center w-full '>
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
                        <option>8</option>
                    </select>
                </div>
                <div className='w-full'>
                    <textarea className='w-full p-3 border bg-inherit h-36 border-neutral-400 rounded-xl'>

                    </textarea>
                </div>         
            </div>    
        </ModalTemplate>
    );
}

export default RepairSupply;