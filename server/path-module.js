const path = require('path')

console.log(path.sep)

// python 처럼 join으로 파일 시스템 경로 붙이기 가능
const filePath = path.join('/content','subfolder','test')
console.log(filePath)

const base = path.basename(filePath)
console.log(base);

// 절대 경로는 __dirname을 사용하면 됨.
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test')
console.log(absolute);
