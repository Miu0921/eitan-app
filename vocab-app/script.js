let currentUnit = '';
let words = [];
let currentWordIndex = 0;
let wrongWords = []; // 間違えた単語を保存する配列
let currentWordList = []; // 現在の単語リスト（最初はすべての単語）

// 単元を選択したときの処理
function selectUnit(unit) {
    currentUnit = unit;
    words = getWordsForUnit(unit);  // この関数は選択された単元に基づいて単語を取得します
    currentWordIndex = 0;
    wrongWords = []; // 新しい単元を選ぶときに間違えた単語リストをリセット

    // 単元選択セクションを非表示にし、クイズセクションを表示
    document.getElementById('unitSelection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    currentWordList = words; // クイズ用に単語リストを設定
    showWord();  // 最初の単語を表示
}

// 単元に基づいて単語リストを取得
// 単元に基づいて単語リストを取得
function getWordsForUnit(unit) {
    if (unit === '1-50') {
        return [
            { word: 'anyway', meaning: 'とにかく' }, { word: 'following', meaning: '～に続いて' },
            { word: 'refer', meaning: '参照する' }, { word: 'available', meaning: '入手できる' },
            { word: 'department', meaning: '部門' }, { word: 'conference', meaning: '会議' },
            { word: 'according to', meaning: '～によると' }, { word: 'likely', meaning: 'おそらく' },
            { word: 'offer', meaning: '申し出る' }, { word: 'equipment', meaning: '機器' },
            { word: 'provide', meaning: '提供する' }, { word: 'local', meaning: '地元の' },
            { word: 'purchase', meaning: '購入する' }, { word: 'opening', meaning: '空き' },
            { word: 'construction', meaning: '建設' }, { word: 'tour', meaning: '見学する' },
            { word: 'research', meaning: '調査' }, { word: 'attend', meaning: '出席する' },
            { word: 'delivery', meaning: '配達' }, { word: 'recently', meaning: '最近' },
            { word: 'indicate', meaning: '示す' }, { word: 'employee', meaning: '社員' },
            { word: 'additional', meaning: '追加の' }, { word: 'survey', meaning: 'アンケート調査' },
            { word: 'review', meaning: '目を通す' }, { word: 'production', meaning: '生産' },
            { word: 'located', meaning: '位置して' }, { word: 'detail', meaning: '詳細' },
            { word: 'announce', meaning: '発表する' }, { word: 'repair', meaning: '修理' },
            { word: 'increase', meaning: '増加' }, { word: 'include', meaning: '含む' },
            { word: 'currently', meaning: '現在' }, { word: 'advertising', meaning: '広告' },
            { word: 'charge', meaning: '請求する' }, { word: 'expect', meaning: '予期する' },
            { word: 'firm', meaning: '会社' }, { word: 'client', meaning: '顧客' },
            { word: 'financial', meaning: 'お金の' }, { word: 'annual', meaning: '年に一度の' },
            { word: 'payment', meaning: '支払い' }, { word: 'budget', meaning: '予算' },
            { word: 'application', meaning: '応募書類' }, { word: 'contract', meaning: '契約' },
            { word: 'management', meaning: '経営' }, { word: 'performance', meaning: '成績' },
            { word: 'pleased', meaning: '満足して' }, { word: 'confirm', meaning: '確認する' },
            { word: 'award', meaning: '受賞' }, { word: 'clothing', meaning: '衣類' }
        ];
    } else if (unit === '51-100') {
        return []; 
    } else if (unit === '101-150') {
        return []; 
    }else if (unit === '151-200') {
        return []; 
    }else if (unit === '201-250') {
        return []; 
    }else if (unit === '251-300') {
        return []; 
    }else if (unit === '301-350') {
        return []; 
    }else if (unit === '351-400') {
        return []; 
    }else if (unit === 'パート1重要語100') {
        return []; 
    }else if (unit === '') {
        return []; 
    }
    return [];
}


// 現在の単語を表示
function showWord() {
    if (currentWordIndex < currentWordList.length) {
        document.getElementById('word').textContent = currentWordList[currentWordIndex].word;
        document.getElementById('result').textContent = '';
        document.getElementById('answer').value = '';
    } else {
        document.getElementById('result').textContent = 'クイズ終了！';
    }
}

// 答えをチェック
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const currentWord = currentWordList[currentWordIndex];
    const result = document.getElementById("result");

    if (userAnswer === currentWord.meaning) {
        result.textContent = "〇 正解！";
    } else {
        result.textContent = `✕ 不正解。正解は「${currentWord.meaning}」です。`;
        wrongWords.push(currentWord); // 間違えた単語を保存
    }
}

// 次の単語に進む
function nextWord() {
    currentWordIndex++;
    showWord();
}

// 間違えた単語を復習
function reviewWrongWords() {
    if (wrongWords.length === 0) {
        alert("間違えた単語はありません！");
        return;
    }
    currentWordList = wrongWords; // 間違えた単語のみのリストに切り替え
    wrongWords = []; // 復習後はリストをリセット
    currentWordIndex = 0; // 復習用にインデックスをリセット
    showWord(); // 最初の間違えた単語を表示
}
