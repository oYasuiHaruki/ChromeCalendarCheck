self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated.');
});

self.addEventListener('message', (event) => {
    console.log('Received message in Service WOrker:', event.data);
});

self.addEventListener('alarm', (alarm) => {
    console.log('Alarm triggered:', alarm.name);

});

async function fetchCalendarData() {
    try {
        const accessToken = "Access token"
        const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        console.log('Calendar data:', data);
    } catch (error) {
        console.error("Error fetching calendar data:", error);
    }
}


// バックグラウンドスクリプトでコンテンツスクリプトから送信されたメッセージを受信し、
// その内容に基づいて処理を行う方法を示す

// メッセージを受信するリスナーを追加
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // コンテンツスクリプトからのメッセージを確認
    if (message.type === 'CALENDAR_EVENTS') {
        // 受け取ったイベントデータを処理
        const events = message.data;
        console.log('Received calendar events', events);

        // 必要に応じていろいろ処理を実行
        // 例: データベースへの保存、集計、通知の送信など

        // 応答を送信する
        sendResponse({ status: 'Success', message: 'Events processed' });
    }
    return true;
});

