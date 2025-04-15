import {useState, ChangeEvent, FormEvent} from "react";
import { Container, Form, Input, Label, InputWrapper, Button, Title } from "./SignupPage_styles"; // 스타일 import
import React from "react";

function SignupPage() {
    // formData : 현재 입력된 폼의 데이터를 담고 있는 객체
    const [formData, setFormData] = useState({
        id: "",
        password: "",
        confirmPassword: "",
        name: "",
        email: ""
    });

    // e.target : 이벤트가 발생한 HTML요소, 여기선 <input>
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        // ...formData : 객체 복사(기존의 값을 복사함), 
        // [name]: value는 name에 해당하는 필드만 새로운 값으로 바꿈
        setFormData({...formData, [name]: value}); 
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();   // 새로고침 방지
        // 간단한 유효성 검사 (비밀번호와 비밀번호 확인이 일치하는가)
        if(formData.password !== formData.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        else {
            alert("회원가입이 완료되었습니다.");
            // 이후 서버에 전송 로직 등 추가 기능 작성
        }
    };

    return(
        <Container>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label htmlFor="id">아이디</Label>
            <Input
              type="text"
              name="id"
              placeholder="아이디"
              value={formData.id}
              onChange={handleChange}
              required
            />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password">비밀번호</Label>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="name">이름</Label>
            <Input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleChange}
              required
            />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">이메일</Label>
            <Input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              required
            />
        </InputWrapper>
        <Button type="submit">회원가입</Button>
      </Form>
    </Container>
    );
}
export default SignupPage;