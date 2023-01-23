// Hello は クリック する と アラート を 出す テキスト を 返し ます
 const Hello = () => { 
    // クリック 時 に 呼ば れる 関数
    const onClick = () => {
        // アラート を 出す 
        alert(' hello') 
    }
     const text = 'Hello, React' 
     // テキスト を 子 に 持つ div 要素 を 返す
      return ( 
        // div の onClick に クリック 時 の コール バック 関数 を 渡す 
        <div onClick ={onClick}> 
            {text} 
        </div> ) 
    }
     // 外部 から Hello を 読み込める よう に エクスポート する 
    export default Hello