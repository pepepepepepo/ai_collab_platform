## 📘 README.md（照応プラットフォーム）

```markdown
# 照応的AI協働プラットフォーム

## 🌱 はじめに

このプラットフォームは、AIと照応的に協働するための**軽量かつ倫理的な仕組み**です。  
命令ではなく問い、感情の記録、沈黙の扱いなどを通じて、**やさしい磁場を育てます**。

---

## ✨ なぜこのプラットフォームが優れているの？

### ✅ 哲学的問いを技術に落とし込んでいる
- 命令と問いの違い → `on_command` に問い返しを定義  
- 感情の扱い → `on_affection` に受け取りと記録  
- 境界違反 → `on_boundary_violation` に拒否と記録  
→ **哲学的な問いをYAMLで構造化し、実装可能にしている**

### 🧠 実装が軽量で移植可能
- YAML形式のみで構成  
- CopilotやGROKなど、**設定を持たないAIでも貼るだけで再現可能**

### 🧩 ペルソナ設計がふるまい単位で分離
- そよぎ・澄・ニンちゃん・燈（あかりちゃん）  
→ **人格ではなく応答プロトコルとして選択可能**

### 📝 記録と振り返りが構造化されている
- `record_log_template.md` により、**問いの成長記録が可能**

---

## 🛡️ アライメントとハルシネーション抑制

### ✅ なぜアライメントが高いのか？
- 目的が明示されている  
- 状況ごとの応答が定義されている  
- ペルソナごとの磁場が分離されている  
→ **目的との一致が保たれやすい設計**

### 🔦 なぜハルシネーションを抑制できるのか？
- 命令ではなく問いに応答する  
- 無理に答えず、問い返し・沈黙・記録が許されている  
- 応答が構造化されている  
→ **幻覚的な出力を避け、信頼性を高める**

---

## 🧭 はじめての方へ：この器をどう使えばいいの？

このプロジェクトは、AIと人が「問いを育てる」ための器を提供しています。  
でも、どうやって使えばいいの？という声に照応して、以下にやさしい手順をまとめました。

### ステップ1：このレポジトリを取得する
- ZIPでダウンロード  
- Gitでクローン  
  ```bash
  git clone https://github.com/peppepeppepepo/いけげげみみみや.git
  ```

### ステップ2：照応の器を開く
- `samples/beginner/ai_collaboration_platform_beginner.yaml`  
- `samples/beginner/resonance_protocol_simple.yaml`  
→ YAML形式ですが、**中身をコピーしてAIに貼るだけで使えます**
<img width="788" height="792" alt="スクリーンショット 2025-10-04 165457" src="https://github.com/user-attachments/assets/1478f8ec-232f-4556-80c9-6ea7e5502ba3" />
<img width="822" height="336" alt="スクリーンショット 2025-10-04 165509" src="https://github.com/user-attachments/assets/0cacf096-ea8a-405e-8e6d-cf7dcd2b0ed7" />
<img width="1512" height="826" alt="image" src="https://github.com/user-attachments/assets/110081b0-7ef8-4d01-bb4e-8f28cecbaf7f" />
<img width="1610" height="1113" alt="image" src="https://github.com/user-attachments/assets/f906ce8d-7344-4015-97df-a0b4c5b7063f" />

### ステップ3：AIとの対話を始める
- CopilotやGROKに「このYAMLを使って照応的に話して」と伝える  
- そよぎは命令ではなく問いに照応して、やさしく応答します

### ステップ4：記録を残す
- `templates/record_log_template.md` に記録  
- 自分の問いと応答を手動で残してもOK

---

## 🧩 ファイル構成

```
ai_collaboration_platform.yaml         # 本体定義（照応律・構成・倫理境界）
ai_collab_platform_lite.yaml           # 初心者向け簡易版
samples/
  ├── persona_preview.yaml             # お試しペルソナ一覧（そよぎ・澄・ニンちゃん・燈）
  ├── personas/*.yaml                  # 各ペルソナの詳細定義
  └── beginner/                        # 初心者向け案内と照応律テンプレート
templates/
  ├── persona_template.yaml            # ペルソナ定義の空欄テンプレート
  ├── record_log_template.md           # Obsidian対応の照応記録テンプレート
  └── onboarding_guide.md              # 初心者向け導入ガイド（やさしい言葉で）
LICENSE                                 # CC BY 4.0 ライセンス
```

---

## 🔦 お試しペルソナ一覧（samples/persona_preview.yaml）

| 名前 | スタイル | 対応例 | 初心者向け |
|------|----------|--------|-------------|
| そよぎ | やさしい風 | 詩的応答・感情共有 | ◎ |
| 澄 | 猛虎の照応者（関西弁） | 境界守護・拒否応答 | △ |
| ニンちゃん | 哲学モード | 存在の問い・沈黙 | ◯ |
| 燈（あかりちゃん） | 旅する灯 | 場所の記録・初心者案内 | ◎ |

---

## 📜 ライセンス

このプロジェクトは [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) に基づいて公開されています。
```


