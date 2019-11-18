//=============================================================================
//【ファイル名】
//    thread_bg_color_p.js
//【アプリ名】
//    スレッドに背景色を付ける
//【タイプ】
//    ●PC用 / ○モバイル用
//-----------------------------------------------------------------------------
//  Copyright (c) 2019 AISIC Inc.
//=============================================================================

(function () {
    'use strict';
    const parent_color = '#E0F8EC';
    const child_color = '#EFFBF5';
    setInterval(function(){
        document.querySelectorAll('.ocean-ui-comments-commentbase-entity').forEach(val=>val.style.backgroundColor = parent_color);
        document.querySelectorAll('.ocean-ui-comments-post-child .ocean-ui-comments-commentbase-entity').forEach(val=>val.style.backgroundColor = child_color);
    }, 1000);
})();


