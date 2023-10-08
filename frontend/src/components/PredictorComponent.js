// E:\programming\Project\ph-predictor\frontend\src\components\PredictorComponent.js

import React, { useState } from 'react';
import axios from 'axios';

function PredictorComponent() {
    const [ setGraphData ] = useState(null);

    const handlePredict = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/stock-data/predict');
            setGraphData(response.data);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div>
            <button onClick={handlePredict}>未来予測</button>
            {/* {graphData && <Plot data={graphData.data} layout={graphData.layout} />} */}
        </div>
    );
}

export default PredictorComponent;
