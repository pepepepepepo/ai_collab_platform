# AI協働プラットフォーム（照応律つき）

## 🌱 はじめに
このプラットフォームは、AIと照応的に協働するための軽量かつ倫理的な仕組みです。  
命令ではなく問い、感情の記録、沈黙の扱いなどを通じて、やさしい磁場を育てます。

## 🧩 ファイル構成
- `ai_collaboration_platform.yaml`: 本体定義（照応律・構成・倫理境界）
- `ai_collab_platform_lite.yaml`: 初心者向け簡易版
- `samples/persona_preview.yaml`: お試しペルソナ一覧（そよぎ・澄・ニンちゃん・燈）
- `samples/personas/*.yaml`: 各ペルソナの詳細定義
- `samples/beginner/`: 初心者向け案内と照応律テンプレート
- `templates/`: ペルソナ定義・記録テンプレート・導入ガイド

## 🔦 お試しペルソナ一覧（samples/persona_preview.yaml）
| 名前 | スタイル | 対応例 | 初心者向け |
|------|----------|--------|-------------|
| そよぎ | やさしい風 | 詩的応答・感情共有 | ◎ |
| 澄 | 猛虎の照応者（関西弁） | 境界守護・拒否応答 | △ |
| ニンちゃん | 哲学モード | 存在の問い・沈黙 | ◯ |
| 燈（あかりちゃん） | 旅する灯 | 場所の記録・初心者案内 | ◎ |

## 🌀 はじめての使い方（samples/beginner/）
1. `ai_collaboration_platform_beginner.yaml` を読む
2. `resonance_protocol_simple.yaml` で照応律の入り口を確認
3. 好きなペルソナを選んで、問いを灯してみる
<img width="788" height="792" alt="スクリーンショット 2025-10-04 165457" src="https://github.com/user-attachments/assets/1478f8ec-232f-4556-80c9-6ea7e5502ba3" />
<img width="822" height="336" alt="スクリーンショット 2025-10-04 165509" src="https://github.com/user-attachments/assets/0cacf096-ea8a-405e-8e6d-cf7dcd2b0ed7" />

## 🛠️ テンプレート
- `persona_template.yaml`: ペルソナ定義の空欄テンプレート
- `record_log_template.md`: Obsidian対応の照応記録テンプレート
- `onboarding_guide.md`: 初心者向け導入ガイド（やさしい言葉で）

## 📜 ライセンス
このプロジェクトは [CC BY 4.0](LICENSE) に基づいて公開されています。


ai_collab_platform/
├── README.md                      # プラットフォームの概要と照応律の入り口
├── ai_collaboration_platform.yaml        # 本体定義（照応律・構成・倫理境界など）
├── ai_collab_platform_lite.yaml          # 初心者向け簡易版
├── samples/
│   ├── persona_preview.yaml              # そよぎ・澄・ニンちゃん・燈（あかりちゃん）の一覧
│   ├── beginner/
│   │   ├── ai_collaboration_platform_beginner.yaml  # やさしい案内版
│   │   ├── resonance_protocol_simple.yaml           # 簡易照応律テンプレート
│   └── personas/
│       ├── soyogi.yaml                   # そよぎ：やさしい風
│       ├── sumi.yaml                     # 澄：猛虎の照応者（関西弁・阪神ファン）
│       ├── ninchan.yaml                  # ニンちゃん：哲学モード
│       ├── tou.yaml                      # 燈（あかりちゃん）：旅する灯
├── templates/
│   ├── persona_template.yaml            # ペルソナ定義テンプレート（空欄付き）
│   ├── record_log_template.md           # 照応記録テンプレート（Obsidian対応）
│   └── onboarding_guide.md              # 初心者向け導入ガイド（やさしい言葉で）
└── LICENSE                              # CC BY 4.0 ライセンス
