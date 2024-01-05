import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [name, setName] = useState("");
  let [region, setRegion] = useState("");
  let [qrValue, setQrValue] = useState("");

  const generateQR = () => {
    if (!name || !region) {
      toast.error("이름과 지역을 모두 입력해주세요.");
    } else {
      setQrValue(JSON.stringify({ name, region }));
    }
  }

  return (
    <Container>
      <input onChange = {e => setName(e.target.value)} type="text" placeholder="이름" /> <br></br>
      <select onChange = {e => setRegion(e.target.value)} value={region}>
        <option value="" disabled hidden>지역 선택</option>
        <option value="대학">대학</option>
        <option value="중랑">중랑</option>
        <option value="성북">성북</option>
        <option value="노원">노원</option>
        <option value="수락">수락</option>
        <option value="도봉">도봉</option>
        <option value="새신자">새신자</option>
      </select> <br></br>
      <button onClick={generateQR}>Generate</button>
      <br></br>
      {qrValue && <QRCode value= {qrValue} size={270} />}
      <ToastContainer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
