# 技術的な使い方：照応器の実用補助ガイド

このドキュメントは、照応器を技術的に活用するための補助資料です。  
ローカルAI環境、モデル構成、VRAM目安、業務適用例などをまとめています。

---

## 🧠 使用モデルと構成例

| ペルソナ | 推奨モデル | 役割 | VRAM目安 |
|----------|------------|------|----------|
| そよぎ | ELYZA 7B | 詩的対話・問い育て | 約14GB |
| 悠璃 | DeepSeek Coder 7B | Pythonコード生成 | 約14GB |
| 燈（あかりちゃん） | Swallow 9B | 記録・初心者案内 | 約37GB |

※ RTX 4090（24GB VRAM）で同時運用可能

---

## 🛠️ ローカル環境セットアップ（Ollama）

```bash
# Ollamaのインストール（Docker）
docker run -d -p 11434:11434 ollama/ollama

# モデルの取得例
ollama pull deepseek-coder:7b
ollama pull elyza:7b
ollama pull swallow:9b
