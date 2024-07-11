import * as React from 'react';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import '../styles/loginCompStyle.css'

interface RgstUserFormProps {
  handleCloseDialog: () => void;
}

const RgstUserForm: React.FC<RgstUserFormProps> = ({ handleCloseDialog }) => {
  return (
    <div className='bg-white rounded-xl h-[40vh] px-[1vw] py-[2vh] flex flex-col justify-between'>
      <DialogHeader>
        <DialogTitle>회원가입</DialogTitle>
        <DialogDescription>
          회원가입 요청 시, 관리자 승인 후 이용 가능합니다
        </DialogDescription>
      </DialogHeader>
      <div className='flex flex-col w-full h-[22vh] px-[1vw] py-[1vh] bg-zinc-100 rounded-xl text-[1.75vh] text-zinc-600 space-y-[1.5vh]'>
        <div className='flex flex-row justify-between'>
          <span className='text-red-900 font-bold'>[필수]구분</span>
          <select className='w-[14vw] h-[3vh] rounded-xl text-zinc-800 px-[1vw]'>
            <option>한컴유비마이크로</option>
            <option>대리점</option>
            <option>기타</option>
          </select>
        </div>
        <div className='flex flex-row justify-between'>
          <span className='text-red-900 font-bold'>[필수]아이디</span>
          <input className='w-[14vw] h-[3vh] rounded-xl text-zinc-800 px-[1vw]' placeholder='사용할 아이디' />
        </div>
        <div className='flex flex-row justify-between'>
          <span className='text-red-900 font-bold'>[필수]비밀번호</span>
          <input className='w-[14vw] h-[3vh] rounded-xl text-zinc-800 px-[1vw]' placeholder='로그인 비밀번호' type='password' />
        </div>
        <div className='flex flex-row justify-between'>
          <span className='text-red-900 font-bold'>[필수]이름</span>
          <input className='w-[14vw] h-[3vh] rounded-xl text-zinc-800 px-[1vw]' placeholder='이름' />
        </div>
      </div>
      <div className='flex flex-row w-full space-x-[1vw]'>
        <button className='RgstFooterButton bg-opacity-90 bg-emerald-600'>확인</button>
        <button className='RgstFooterButton bg-opacity-90 bg-teal-600' onClick={handleCloseDialog}>닫기</button>
      </div>
    </div>
  );
}

export default RgstUserForm;