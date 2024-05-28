const fs = require('fs');
const path = require('path');

// 프로젝트 루트 디렉터리
const projectRoot = process.cwd();

// code 디렉토리 경로
const codeDir = path.join(projectRoot, 'docs/blog/algorithm', 'code');

// 변환된 파일 저장할 디렉토리 경로
const outputDir = path.join(projectRoot, 'src', 'generated');

function generateCodeContent() {
    const files = fs.readdirSync(codeDir);

    files.forEach((file) => {
        const filePath = path.join(codeDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const outputFilePath = path.join(outputDir, `${path.basename(file, path.extname(file))}.json`);

        fs.writeFileSync(outputFilePath, JSON.stringify({ content: fileContent }), 'utf8');
    });
}

// 출력 디렉토리가 없으면 생성
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

generateCodeContent();
