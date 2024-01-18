# 2023後期jabascript基礎授業課題
## 授業内コード
 1. 10月5日（木）はじめの一歩
 2. 10月5日（木）Githubリポジトリ作成



## 1 月 18 日
- for…in文
オブジェクトを取得したい時のfor文
  ```js

        const countries = {
            Japan: "日本",
            USA: "アメリカ",
            China: "中国",
            Korea: "韓国",
        };

        for (let key in countries) {
            console.log(key + ":" + countries[key]);
        }

        for (let country in countries) {
            console.log(countries[country])
            //文字列になるのでブランケットで取得
        }




        //受験者名簿（オブジェクトの配列）
        const meibo_obj = [//←[]で囲まれているので配列

            //↓{}で囲まれているのでオブジェクト
            { id: "20224", name: "新井太郎" },
            { id: "20031", name: "井上次郎" },
            { id: "20193", name: "山本花子" }
        ];
        //オブジェクトが3つはいっているオブジェクト
        //配列の要素が欲しい for文で回す

        for (let i = 0; i < meibo_obj.length; i++) {
            console.log(meibo_obj[i]);

            //配列の中にオブジェクトがあるので配列を回している中にin...for文
            for (let key in meibo_obj[i]) {

                console.log(meibo_obj[i][key])
            }

        }
  ```



- オブジェクト操作
```js
  const animals = ["dog", "cat", "bird"];

    ///値の変更　添字でできる
    animals[2] = "lion";

    //先頭に要素を追加する
    animals.unshift("elephant");

    //先頭の要素を削除する
    animals.shift();

    //末尾に要素を追加する
    animals.push("tiger");

    //末尾の要素を削除する
    animals.pop();
```


## 1 月　11 日
- ===　 は型も含めて一緒
    -formの値は文字列になるのでNumber()で数値型に変換する
- オブジェクト
```js
    //オブジェクトを作る
    const sample = {
            キー: "値",
            キー2: "値2"
        };

    //コンソールに表示する
    console.log(sample);
    //コンソールに値2を表示する
    console.log(sample.キー2);
    //.ではなく[]でやる方法
    console.log(sample["キー2"]);

    //外側から新しく作る
    sample.キー3 = "値3"

    //削除する
    delete sample.キー１;

    //再代入(上書き)
    sample.キー二="値二";


 const person = {
                name: "",
                age: 0,

            information: function () {
                    return "名前:" + this.name + "\n年齢:" + this.age;
                    //thisはperson
                    //returnはレ点
                                    }
                };
        person.name = "山田太郎";
        person.age = 18;
        // console.log(person.name, person.age);
        console.log(person.information());
```

## 12 月　21　日
-
    - removeAttribute --要素から属性を消す
    - insertBefore -----appendChildの逆、前にいれる



```js

//関数化する前
const rightBtn = document.querySelector(".rightBtn");

rightBtn.addEventListener("click", () => {
    const slideimages = document.querySelectorAll(".slide img");
    slideimages[1].removeAttribute("style");//要素を消す
    slideimages[0].style.marginLeft = "0"
    slide.insertBefore(slideimages[slideimages.length - 1], slideimages[0]);
})


↓

//関数化したとき

const rightBtn = document.querySelector(".rightBtn");

const rightSlider = () => {
    const slideimages = document.querySelectorAll(".slide img");
    slideimages[1].removeAttribute("style");//要素を消す
    slideimages[0].style.marginLeft = "0"
    slide.insertBefore(slideimages[slideimages.length - 1], slideimages[0]);
}

rightBtn.addEventListener("click", rightSlider)

rigthBtn.addEventListener("click",)


```









## 12 月　14 日

- アロー関数
    - thisが使えないので注意
```js
    //いつもの
   const dog = function () {
            return "わんわん";
        };

     console.log(dog());


     //アロー関数

     const cat = ()=>{
        return "ミャーミャー";
     }
     console.log(cat());
```

- setTimeout()
グローバルの setTimeout() メソッドは、時間切れになると関数または指定されたコードの断片を実行するタイマーを設定する。

- コールバック関数
    - タイミングをずらしたりするときに使う
```js

        //基本的なコールバック関数
        //関数式１
        //③ ②callback→func [②のとこにあったtestFuncがある]
        const testFunc = function (func) {
            //funcには関数式２
            //関数の実行後直ぐに表示
            console.log("testFuncが実行されました");

            //２秒後、実行
            setTimeout(function () {
                //④ ③func→func
                func();
            }, 2000);
        };
        //関数式２
        //① callback
        const callback = function () {
            console.log("callbackが実行されました");
        };

        //関数式１を実行している
        //callbackは関数式２の関数名
        //② ①callback→callback [①のcallbackがある]
        testFunc(callback);


```


## 12 月　9 日
- 関数
```js
//関数の定義
　function 関数名(引数, 引数, …){
//ここに処理を書く;
}
//関数式
const 関数名　= function(){
    処理;
}

//実行
関数名();

//関数の利用（実行）
関数名(引数, 引数, …);

```

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

-
const 変数　= document.querySelector("class名とか要素名")





## 10 月　19 日
- コレクション（配列）
定義してから使用
const 変数名　= ["要素0","要素1",...];
取得するg
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
