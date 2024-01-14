import React, { useState } from "react";
import QRCode from "qrcode.react";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

function App() {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [qrValue, setQrValue] = useState("");
  const regions = ["대학", "중랑", "성북", "공릉", "노원", "도봉", "새신자"];

  const generateQR = () => {
    if (!name || !region) {
      Swal.fire({
        icon: "error",
        title: "이름과 지역을 모두 입력해주세요.",
        showConfirmButton: true,
      });
    } else {
      setQrValue(JSON.stringify({ name, region }));
    }
  };

  return (
    <Container>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="이름"
      />{" "}
      <br></br>
      <select onChange={(e) => setRegion(e.target.value)} value={region}>
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
      <button onClick={generateQR}>Generate</button>
      <br></br>
      {qrValue && <QRCode value={qrValue} size={270} />}
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
`;
