# E:\programming\Project\ph-predictor\backend\py\predictor.py

import pandas as pd
import numpy as np
import plotly.graph_objects as go
from statsmodels.tsa.arima.model import ARIMA
import os

# 絶対パスを取得
base_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(base_dir, '../download/PSEI.PS.csv')

# データの読み込み
df = pd.read_csv(file_path, parse_dates=['Date'])
df.set_index('Date', inplace=True)

# 日付のインデックスを単調にする
df = df.sort_index()

# 推測頻度を取得して設定
df.index.freq = df.index.inferred_freq

# モデルの設定
model = ARIMA(df['Close'], order=(5,1,0))
model_fit = model.fit()  # disp=0 を削除

# 予測
forecast = model_fit.forecast(steps=30)

# グラフの描画
fig = go.Figure()

# 実際のデータ
fig.add_trace(go.Scatter(x=df.index, y=df['Close'], mode='lines', name='Actual'))

# 予測データ
forecast_dates = [df.index[-1] + pd.Timedelta(days=i) for i in range(1, 31)]
fig.add_trace(go.Scatter(x=forecast_dates, y=forecast, mode='lines+markers', name='Forecast'))

fig.update_layout(title='PSEI.PS Stock Price Forecast',
                   xaxis_title='Date',
                   yaxis_title='Stock Price')

print(df.index.inferred_freq)

fig.show()
