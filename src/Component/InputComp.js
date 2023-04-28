import "../css/InputComp.css";
import { useState, useEffect } from "react";

function InputComp() {
  return (
    <div id="input-comp">
      <label for="id">아이디</label>
      <input type="text" id="id"></input>
      <label for="password">비밀번호</label>
      <input type="password" id="password"></input>
    </div>
  );
}

export default InputComp;
