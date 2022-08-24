/* 壓縮和合併 --------------------------------------------------------------------------------------------------------- */
// 減少http request
// 減少request資源大小

/* html壓縮 css壓縮 js壓縮 圖片壓縮 --------------------------------------------------------------------------------------------------------- */
// webpack
// imagemin.saasify.sh

/* css js合併 --------------------------------------------------------------------------------------------------------- */
// 很多檔案都很小, 可以考慮
// 相同的模組, 可以考慮

/* webp圖片格式 --------------------------------------------------------------------------------------------------------- */
// 具有png的圖片色彩壓縮不失真, 但又有jpg一樣壓縮的體積 (未來的方案: 主要要看瀏覽器的兼容性)

/* 圖片lazying loading --------------------------------------------------------------------------------------------------------- */
// 原生方案
<img loading="lazy" src="https://your-path" />;
// 第三方方案
verlok/lazyload
yall.js
Blazy

serach keyword | lazyload image for vue, lazyload image for react, 

/* 漸進式圖片loading --------------------------------------------------------------------------------------------------------- */
// baseline JPEG
從上到下掃描加載
// Progressive JPEG
從模糊到清楚(一開始就可以看到整張圖的layout)
// 方案
progressive-image
ImageMagick
libjpeg
jpegtran
jpeg-recompress
imagemin

/* 響應式圖片 --------------------------------------------------------------------------------------------------------- */
// Srcset屬性
// Sizes屬性 

/* 字型閃爍 font-display(ie不支持) --------------------------------------------------------------------------------------------------------- */
// FOIT FOUT
flash Of Invisible Text
flash Of Unstyled Text

ex: 當網頁字型尚未載入完成,瀏覽器會先給一個預設字型,等到自定義的字型載入完成後,再取代瀏覽器預設字型時,會有一個閃爍更換的moment
// font-display
block
swap 
fallback
optional