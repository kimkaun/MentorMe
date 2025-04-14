import { useState, FormEvent, ChangeEvent } from "react";
import { Container, Form, Input, Button, Title, LinkSign, LinkSearch, LinkWrapper } from "./LoginPage_styles"; // 스타일 import
import React from "react";

function LoginPage() {
  const [Id, setId] = useState<string>(''); // 문자열 타입 명시
  const [Password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지

    // DB없이 로그인
    const Ex_ID = 'kim';
    const Ex_PW = '1111';

    if (Id === Ex_ID && Password === Ex_PW) {
      alert('로그인되었습니다.');
    } else {
      alert('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디"
          value={Id}
          onChange={handleIdChange}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={Password}
          onChange={handlePasswordChange}
          required
        />
        {/* 회원가입 및 아이디/비밀번호 찾기 링크 */}
        <LinkWrapper>
          <LinkSign href="">회원가입하기</LinkSign>  
          <LinkSearch href="">아이디 | 비밀번호 찾기</LinkSearch>
        </LinkWrapper>
        <Button type="submit">로그인</Button>
        
      </Form>
    </Container>
  );
}
export default LoginPage;
