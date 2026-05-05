-- ============================================
-- Svelte 5 + MySQL 기초 강좌
-- 데이터베이스 초기 설정 SQL
-- ============================================

-- 1. 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS todo_app
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- 2. 데이터베이스 사용
USE todo_app;

-- 3. todos 테이블 생성
CREATE TABLE IF NOT EXISTS todos (
  id         INT AUTO_INCREMENT PRIMARY KEY,  -- 고유 번호 (자동 증가)
  text       VARCHAR(200) NOT NULL,           -- 할 일 내용 (최대 200자)
  completed  BOOLEAN DEFAULT FALSE,           -- 완료 여부 (기본값: 미완료)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- 생성 시간 (자동)
);

-- 4. 테스트 데이터 삽입 (선택사항)
INSERT INTO todos (text) VALUES
  ('Svelte 5 기초 문법 공부하기'),
  ('MySQL 설치하고 테이블 만들기'),
  ('SvelteKit으로 서버 코드 작성하기'),
  ('Todo 앱 CRUD 구현하기'),
  ('스타일링하고 배포하기');

-- 5. 확인
SELECT * FROM todos;
