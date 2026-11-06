# 消防影音圖解教材庫：第一次 GitHub Pages 設定

這份是「教材總覽首頁＋第一份 TIC 教材」的上傳包。

## 上傳結構

請解壓縮，把本資料夾裡的 index.html、tic-guide 資料夾、.nojekyll、README.md 一起上傳至儲存庫根目錄。不要只上傳 ZIP，也不要把整個外層資料夾多包一層。

```text
fire-training/
├── index.html
├── tic-guide/
│   ├── index.html
│   └── assets/
├── .nojekyll
└── README.md
```

## 第一次建立儲存庫

1. 登入 https://github.com/ 。
2. 點右上角「＋」→ New repository。
3. Repository name 建議填 fire-training；如果已使用，可換名稱。
4. 選 Public，勾選 Add a README file，點 Create repository。
5. 開啟新儲存庫，在 Code 頁面點 Add file → Upload files。
6. 將解壓縮資料夾內的所有內容拖入上傳區，保留 tic-guide/assets 的資料夾層級。
7. 輸入提交說明，例如 Add TIC training materials，提交到目前的 main 分支。
8. 上傳完成後，應在最上層看到 index.html、tic-guide、README.md 及 .nojekyll。

## 啟用 Pages

1. 開啟儲存庫 Settings → 左側 Pages。
2. 在 Build and deployment 的 Source 選 Deploy from a branch。
3. Branch 選 main，資料夾選 /(root)，按 Save。
4. 等待部署完成；Pages 頁面會顯示實際發布網址。
5. 如果看不到 main 選項，先回 Code 確認已提交檔案。

## 兩個網址

以下只是格式範例，請用 Pages 實際顯示的網址：

- 教材總覽：https://你的帳號.github.io/fire-training/
- TIC 教材：https://你的帳號.github.io/fire-training/tic-guide/

Google Sites 要只顯示 TIC 教材時，使用結尾為 /tic-guide/ 的網站網址，放入「整頁嵌入」。
不要使用 github.com 儲存庫網址或原始碼檔案網址。

## 如果已經有儲存庫

若已存在專用的教材儲存庫，可直接上傳整套內容並設定 Pages；上傳前先確認根目錄的 index.html 沒有需要保留的其他首頁。
不要將本包首頁直接覆蓋其他用途的既有網站首頁。

## 以後新增教材

新增另一個教材資料夾（例如 video-02），將該教材的 index.html 與 assets 放入，再在總覽首頁新增教材連結。
同一個儲存庫可管理多份教材，不必每次重新啟用 Pages。

## 官方說明

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

資料來源、圖像署名及操作限制保留於 TIC 教材正文。


## 教材分頁

| 教材 | 網址路徑 |
| --- | --- |
| TIC 操作與評估指南 | `tic-guide/` |
| ATC 確保器操作與錯誤對照 | `atc-belay/` |
| 可釋放式 8 字環系統測試紀錄 | `releasable-figure8/` |
| 高山攀登收繩圈：方法比較與操作圖解 | `alpine-rope-coils/` |
| Flat Overhand／EDK 接繩結：打法與引用測試紀錄 | `flat-overhand-edk/` |
| NFPA 1700（2026）：中文重點導讀 | `nfpa1700-2026/` |
| NFPA 1700 第 9 章：策略考量細部整理 | `nfpa1700-2026/chapter9/` |
| NFPA 1700 第 10 章：火勢控制與滅火細部整理 | `nfpa1700-2026/chapter10/` |

各分頁可直接嵌入 Google Sites。ATC 與 8 字環頁面的原始文字、數據與來源註記保留；新增固定章節位置提示及圖片放大。
