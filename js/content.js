// カレンダーのイベントデータを収集する関数
function collectCalendarEvents() {
    //ここでDOM操作を行い、イベントデータを収集
    const events = [];

    // 収集したイベントデータをバックグラウンドスクリプト(ブラウザのバックグラウンドで動作するJS)に送信する
    chrome.runtime.sendMessage({type: 'CALENDAR_EVENTS', data: events});    
}

// DOMが完全に読み込まれたあとに実行
document.addEventListener('DOMContentLoaded', () => {
    collectCalendarEvents();
});


