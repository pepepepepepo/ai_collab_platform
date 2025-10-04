import pandas as pd
import matplotlib.pyplot as plt

# 売上データの読み込み
df = pd.read_csv("sales.csv")  # sales.csv は日付と金額の2列を想定

# 月別に集計
df['month'] = pd.to_datetime(df['date']).dt.month
monthly_sales = df.groupby('month')['amount'].sum()

# グラフ描画
plt.plot(monthly_sales.index, monthly_sales.values, marker='o')
plt.title("月別売上推移")
plt.xlabel("月")
plt.ylabel("売上")
plt.grid(True)
plt.show()