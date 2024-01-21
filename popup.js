// Collect Eventsボタンがクリックされたときに実行されるイベントリスナーを追加する
document.getElementById('collectEvents').addEventListener('click', () => {
    // 現在、アクティブなタブを取得する
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        // アクティブなタブにメッセージを送信し、イベントデータの取得を要求します。
        chrome.tabs.sendMessage(tabs[0].id, {type: 'FETCH_EVENTS'}, (response) => {
            // 応答を受け取った場合、その内容を処理する
            if(response && response.status === 'Success') {
                // "eventsList"というIDを持つ要素を取得します。
                const eventsList = document.getElementById('eventsList');
                eventsList.textContent = JSON.stringify(response.data, null, 2);
            }
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
                return;
            }
        });
    });
});