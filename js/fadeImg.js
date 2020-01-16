var target;
//操作する親idを格納する変数
var slider;
//親div直下のdivを配列で格納する変数
var sliderCount;
//親id直下のdivの数を格納する変数
var targetImg;
//操作するdiv内の画像を格納する変数
var count;
//操作するdivの配列の順番を格納する変数
var fadeTime;
//画像の透明度を格納する変数

window.onload = function(){
//画面読み込み直後に実行されるメソッド
	target = document.getElementById("navi");
	//操作する親idを取得
	slider = target.getElementsByTagName("div");
	//その親id直下の子divを配列で取得
	sliderCount = slider.length;
	//親id直下の子divの数を取得
	count = 0;
	//最初に表示するdivの配列のナンバーを格納
	fadeImg();
	//子div画像を操作するメソッドを呼び出す
}

function fadeImg(){
//子div画像を操作するメソッドを宣言
	fadeTime = 0;
	//画像の透明度を操作する数値を０（透明）にする
	targetImg = slider[count].getElementsByTagName("img");
	//操作する子divの画像を配列で取得する
	targetImg[0].style.opacity = fadeTime;
	//操作するdiv画像配列（今回は一つなので０）の透明度を操作
	slider[count].className = "active";
	//表示するdivのクラスネームを変えて表示する
	fadeIn(fadeTime);
	//画像フェードインのメソッドを呼び出す。引数に現在の透明度（０）の数値を格納した変数を渡す
}
	
function fadeNext(fadeTime){
//フェードインメソッドの後に呼ばれるメソッド
	setTimeout(function(){fadeOut(fadeTime)}, 3000);
	//3秒後にfadeNextのメソッドを実行する
}

function fadeIn(fadeTime){
//画像フェードインのメソッドを宣言。引数に透明度の引数を受け取る
		if(fadeTime <= 9){
		//もし透明度が9未満なら以下を実行する
			fadeTime += 1;
			//透明度に１足す
			targetImg[0].style.opacity = fadeTime / 10;
			//画像の透明度を変更する。透明度は1がMAXなので10で割って小数点以下にする
			setTimeout(function(){fadeIn(fadeTime)}, 30);
			//10ミリ秒後に再度fadeInメソッドを実行する
		 }else{
			fadeNext(fadeTime);
			//このメソッドを終了して、次のメソッドを実行する。引数に画像の透明度を格納した引数を渡す
		 }
}

function fadeOut(fadeTime){
		if(fadeTime >= 1){
		//もし透明度が１以上なら下記を実行する
			fadeTime -= 1;
			//透明度を-1にする
			targetImg[0].style.opacity = fadeTime / 10;
			//透明度を操作する
			setTimeout(function(){fadeOut(fadeTime)}, 30);
			//30ミリ秒後にメソッドを再度実行する
		}else{
		//もし透明度が１以下（つまり０）なら下記を実行する
			if(count < sliderCount -1){
				//もし表示カウントが子div数の上限ではなければ下記を実行する
				slider[count].className = "hiden";
				//表示するdivのクラスネームを変えて非表示にする
				count += 1;
				//表示するカウントに１足す
				fadeImg();
				//フェードメソッドを一から実行する
			}else{
			//もし表示カウントが子div数の上限ならば
				slider[count].className = "hiden";
				//表示するdivのクラスネームを変えて非表示にする
				count = 0;
				//表示カウントを０に戻す
				fadeImg();
				//フェードメソッドを一から再実行する
			}
		}
}