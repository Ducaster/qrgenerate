import React, { useState } from "react";
import QRCode from "qrcode.react";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

import "./styles.css";

function App() {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const regions = [
    "대학",
    "중랑",
    "성북",
    "공릉",
    "노원",
    "도봉",
    "새신자",
    "기능부",
  ];

  const generateQR = () => {
    if (!name || !region) {
      Swal.fire({
        icon: "error",
        title: "이름과 지역을 모두 입력해주세요.",
        showConfirmButton: true,
      });
    } else {
      setQrValue(JSON.stringify({ name, region }));
      setShowInfo(true);
    }
  };

  return (
    <Container>
      <div>
        <div class="login">
          <input
            class="root1"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="이름"
          />{" "}
          <br></br>
          <select
            class="root1"
            onChange={(e) => setRegion(e.target.value)}
            value={region}
          >
            <option value="" disabled hidden>
              지역 선택
            </option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>{" "}
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
              imageSettings={{
                src: "WaveOn-QrLogo.png",
                x: null,
                y: null,
                height: 40,
                width: 40,
                excavate: true, // QR 코드 중앙에 이미지를 "파내서" 넣을지 여부
              }}
            />
          )}
          {showInfo && (
            <div className="info">
              이름: {name}
              <br />
              지역: {region}
            </div>
          )}
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
