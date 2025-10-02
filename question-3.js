const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        fs.unlinkSync(filePath);
        console.log(`delete files...${file}`);
    });

    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.\n');
}

fs.mkdirSync(logsDir);

process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
    const filename = `log${i}.txt`;
    fs.writeFileSync(filename, `This is log file number ${i}`);
    console.log(filename);
}

