import React, { useState } from "react";
import QRCode from "qrcode.react";
import styled from "styled-components";
import Swal from "sweetalert2";

import "./styles.css";

function App() {
  const [name, setName] = useState(""); // 이름 상태 추가
  const [qrValue, setQrValue] = useState(""); // QR 코드 값 상태 추가
  const [showInfo, setShowInfo] = useState(false); // 정보 표시 여부 상태 추가

  const generateQR = () => {
    if (!name) {
      Swal.fire({
        icon: "error",
        title: "이름을 입력해주세요.",
        showConfirmButton: true,
      });
    } else {
      // 이름과 고정된 지역값으로 QR 코드 데이터 생성
      const qrData = { name, region: "5월" };
      setQrValue(JSON.stringify(qrData));
      setShowInfo(true);
    }
  };

  return (
    <Container>
      <div>
        <div class="login">
          <input
            class="root1"
            onChange={(e) => setName(e.target.value)} // 이름 입력 시 setName 호출
            type="text"
            placeholder="이름"
          />{" "}
          <br></br>
          <br></br>
          <button
            class="btn btn-primary btn-block btn-large"
            onClick={generateQR}
          >
            Generate
          </button>
          <br></br>
          {qrValue && (
            <QRCode
              value={qrValue}
              size={260}
              fgColor="#4f4f4f"
              imageSettings={{
                src: "IAM_logo.png",
                x: null,
                y: null,
                height: 65,
                width: 65,
                excavate: true,
              }}
            />
          )}
          {showInfo && <div className="info">이름: {name}</div>}
        </div>
      </div>
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
  background-color: white;
  @media (prefers-color-scheme: dark) {
    background-color: white;
  }
`;
