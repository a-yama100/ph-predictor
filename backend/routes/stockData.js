// E:\programming\Project\ph-predictor\backend\routes\stockData.js

const express = require('express');
const yahooFinance = require('yahoo-finance');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');  // <-- 追加
const router = express.Router();
const scriptPath = path.join(__dirname, '..', 'py', 'predictor.py');
const output = execSync(`python "${scriptPath}"`, { encoding: 'utf-8' });

router.get('/download/:filename', async (req, res) => {
    try {
        const filename = req.params.filename;
        const downloadDirectory = path.join(__dirname, '..', 'download');
        const filePath = path.join(downloadDirectory, filename);

        // 既に同じファイル名のファイルが存在する場合、ダウンロードは行われません
        if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
            res.sendFile(filePath);
            return;
        }

        // Yahoo Finance から PSEI.PS のデータをダウンロード
        const data = await yahooFinance.historical({
            symbol: 'PSEI.PS',
            from: '2023-01-01',
            to: '2023-12-31'
        });

        console.log("Yahoo Finance data:", data); // ここでデータをログに出力

        // データをCSV形式に変換
        const csvData = "Date,Open,High,Low,Close,Volume,Adj Close\n" + 
                        data.map(row => `${row.date.toISOString().split('T')[0]},${row.open},${row.high},${row.low},${row.close},${row.volume},${row.adjClose}`).join('\n');

        // データをbackend/downloadディレクトリに保存
        try {
            fs.writeFileSync(filePath, csvData);
        } catch (error) {
            console.error("Error writing to file:", error);
            res.status(500).send("Error writing to file");
            return;
        }

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        res.send(csvData);
    } catch (error) {
        console.error("Error fetching stock data:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/predict', async (req, res) => {
    try {
        const { execSync } = require('child_process');
        const scriptPath = path.join(__dirname, '..', 'py', 'predictor.py');
        const scriptDirectory = path.join(__dirname, '..', 'py');
        const output = execSync(`python "${scriptPath}"`, { encoding: 'utf-8', cwd: scriptDirectory });
        res.send(output);
    } catch (error) {
        console.error("Error executing Python script:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
