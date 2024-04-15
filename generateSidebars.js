const fs = require('fs');
const path = require('path');

const docsDirectory = path.join(__dirname, 'docs/blog');
const outputFilePath = path.join(__dirname, 'sidebars.js');

function generateSidebarObject(directory) {
	const categories = {};

	// 디렉토리 내의 모든 하위 폴더를 탐색합니다.
	const items = fs.readdirSync(directory, { withFileTypes: true });
	items.forEach(item => {
		if (item.isDirectory()) {
			const dirPath = path.join(directory, item.name);
			const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

			// Markdown 파일이 있는 경우만 카테고리를 추가합니다.
			if (files.length > 0) {
				categories[item.name] = {
					type: 'category',
					label: item.name.charAt(0).toUpperCase() + item.name.slice(1), // 폴더 이름을 라벨로 사용
					items: files.map(file => path.join('blog', item.name, file.replace(/\.mdx?$/, ''))), // 확장자를 제거합니다.
				};
			}
		}
	});

	return categories;
}

function writeSidebarFile(sidebarObject) {
	const content = `module.exports = ${JSON.stringify(sidebarObject, null, 2)};`;
	fs.writeFileSync(outputFilePath, content, 'utf-8');
	console.log(`Sidebar configuration has been generated at ${outputFilePath}`);
}

const sidebarObject = {
	blog: generateSidebarObject(docsDirectory)
};

writeSidebarFile(sidebarObject);