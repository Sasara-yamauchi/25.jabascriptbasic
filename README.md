# 2023後期jabascript基礎授業課題
## 授業内コード
 1. 10月5日（木）はじめの一歩
 2. 10月5日（木）Githubリポジトリ作成


## 11 月　9 日
- i++
i++ は　i = i+1 と同じ
=は同じという意味ではなく値を左に代入するという意味

- for文
```js
for(let i=0;　　　　　　　　　　　i<要素.length;　　i++　　)

// 　↑初期化のやつとりあえず書く   ↑どれだけ回すか    ↑書く
```

- 条件分岐
教科書p96

- if文
if(   条件式   ){どうするか
}else if(  条件式    ){どうするか
}else{
どうするか
};

- createElement
新しい要素を作る

- appendChild
要素を追加する







## 10 月　19 日
- コレクション（配列）
定義してから使用
const 変数名　= ["要素0","要素1",...];
取得する
console.log(変数名[要素番号]);

- for文による繰り返し
for (let i = 0; i < 9; i++) {

}


## 10 月 12 日

- リテラルと演算子

### 文字列の計算

```js
 // 文字列の連結
        console.log("ABC+DEF");//文字列＋文字列
        console.log("円周率は" + 3.14 + "です。");//文字列＋数値
        console.log("計算結果：" + 123 + 456);//文字列＋数値の計算→文字列になる　最初の記述が文字列だと数値を書いても文字列になる
        console.log(123 + 456 + "でした");//数値計算＋文字列→数値になるが最後は文字列なので最終的に文字列になる
        console.log("計算結果：" + (123 + 456));//文字列＋(数値の計算)→計算してくれる　
        console.log("2" - 1);//文字列ー数値　→数値2-1に変換して計算してくれる
        console.log("2" * 3);
        console.log("2" / 4);
```


### 変数の宣言・代入


```js

    //変数の宣言・代入
        let a;//変数の宣言
        a = 10;//値の代入(数値型になる)
        console.log(a);
        a = "Hellow";//数値の再代入（文字列型）
        console.log(a);

        //let a = "world"; //変数の宣言と代入を同時に行っている。再宣言はできないのでエラーになる

        //変数の宣言・代入
        const PI = 3.14;
        console.log(PI);

        //再代入
        //PI = 3.1415926535;//constは再宣言も再代入もできない
        //const PI;
        //基本はconstを使用する


        //複合代入演算子
        let n = 5;
        n = n + 2;
        console.log(n)

        let n2 = 5; //n2はただの別の文字
        n2 += 2;//複合代入演算子　n+=2;はn2 = n2 +2 と同じ
        console.log(n2)


        //インクリメント
        let n3 = 5;
        n3++;//インクリメント　1足す n++;はn=n+1と同じ意味
        console.log(n3);//6
```

###　　DOM操作のスクリプト

```js
 //メロンを加えたい
        //ul要素を入れる
        const element = document.querySelector("ul");
        console.log(element);

        //selectorはCSSのセレクターなので
        const element2 = document.querySelector("#fruitslist");
        console.log(element2);

        //classもいける？
        const element3 = document.querySelector(".listbox__list");
        console.log(element3);

        //新しい要素を作る
        const lilast = document.createElement("li");
        console.log(lilast);//dirに変更。オブジェクトの中身が現れる
        lilast.textContent = "メロン";
        console.log(lilast);

        //リストの最後に追加する
        //<li>メロン</li>を変数element内の<ul></ul>に追加する
        element.appendChild(lilast);

        const lilast2 = document.createElement("li");
        lilast2.textContent = "いちご";
        element.appendChild(lilast2);

```

## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
1. 外部 JS ファイルの中
1. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!doctype html>
<html lang=ja>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>演習</title>
</head>
<body>
</script>
</body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。
