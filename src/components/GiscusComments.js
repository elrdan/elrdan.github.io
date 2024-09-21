import React, { useEffect } from 'react';

const GiscusComments = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js'; // Giscus 클라이언트 스크립트 URL
        script.setAttribute('data-repo', 'elrdan/elrdan.github.io'); // 댓글을 저장할 GitHub 저장소
        script.setAttribute('data-repo-id', 'R_kgDOLfirIw'); // 저장소 ID
        script.setAttribute('data-category', 'General'); // GitHub Discussions에서 사용할 카테고리
        script.setAttribute('data-category-id', 'DIC_kwDOLfirI84Cip6Q');    // 카테고리 ID
        script.setAttribute('data-mapping', 'pathname');    // 댓글을 페이지 경로와 연결
        script.setAttribute('data-strict', '0');            // 경로가 엄격하게 일치하지 않아도 댓글을 표시
        script.setAttribute('data-reactions-enabled', '0'); // 댓글에 대한 리액션(이모지) 비활성화
        script.setAttribute('data-emit-metadata', '0'); // 메타데이터 전송 비활성화 (개발자용 옵션)
        script.setAttribute('data-input-position', 'bottom'); // 댓글 입력창을 댓글 목록 하단에 배치
        script.setAttribute('data-theme', 'preferred_color_scheme'); // 사용자의 브라우저 설정에 맞춘 테마 적용
        script.setAttribute('crossorigin', 'anonymous'); // CORS 설정
        script.async = true; // 비동기적으로 스크립트 로드

        // Giscus 스크립트를 삽입할 컨테이너
        const commentsContainer = document.getElementById('giscus-comments-container');
        commentsContainer.appendChild(script);
    }, []);

    return <div id="giscus-comments-container" />; // Giscus 댓글 컨테이너
};

export default GiscusComments;
