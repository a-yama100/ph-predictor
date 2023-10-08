// E:\programming\Project\ph-predictor\frontend\src\components\csvDownload.js

import React, { useState } from 'react';
import axios from 'axios';

function DownloadComponent() {
    const [filename, setFilename] = useState('PSEI.PS.csv');

    const handleDownload = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/stock-data/download/${filename}`, {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error("Error downloading the file:", error);
        }
    };

    return (
        <div>
            <input type="text" value={filename} onChange={(e) => setFilename(e.target.value)} />
            <button onClick={handleDownload}>ダウンロード</button>
        </div>
    );
}

export default DownloadComponent;