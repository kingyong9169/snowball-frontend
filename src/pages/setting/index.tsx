import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Container from '@components/Container';

const Setting: NextPage = () => {
  const router = useRouter();

  function onClick() {
    router.push('/town');
  }

  return (
    <Container bgColor="bg-primary-900">
      <div className="relative">
        <button type="button" className="absolute text-primary-50 text-2xl p-6 text-center inline-flex items-center" onClick={onClick}>
          <span>{'<'}</span>
        </button>
        <p className="relative text-center w-1/2 mx-auto py-7 text-primary-50 text-2xl">설정</p>
      </div>
      <div className="absolute inset-x-0 top-1/2 text-center z-50">
        <button
          type="button"
          className="block mx-auto w-3/5 text-primary-50 font-medium text-lg px-5 py-2.5 text-center mb-4"
          style={{ borderBottom: '1.5px solid rgba(255, 255, 255, .25)' }}
        >
          로그아웃
        </button>
        <button
          type="button"
          className="block mx-auto w-3/5 text-primary-50 font-medium text-lg px-5 py-2.5 text-center"
          style={{ borderBottom: '1.5px solid rgba(255, 255, 255, .25)' }}
        >
          회원 탈퇴
        </button>
      </div>
    </Container>
  );
};

export default Setting;
