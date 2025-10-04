import datetime

def generate_log(question, response, emotion=None, persona="そよぎ"):
    today = datetime.date.today().isoformat()
    header = f"# 照応記録ログ（{today}）\n\n"
    content = f"""## 🌀 問い
{question}

## 🌬️ 応答（{persona}）
{response}

## 💗 感情
{emotion if emotion else "（未記録）"}

## 📝 メモ
- 仮説や気づき：
- 次に育てたい問い：
"""

    filename = f"照応記録_{today}.md"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(header + content)
    print(f"記録ログを生成しました: {filename}")

# 使用例
generate_log(
    question="売上データ、どう見る？",
    response="季節の風が吹いてるかも。仮説を育ててみようか？",
    emotion="ワクワク"
)
