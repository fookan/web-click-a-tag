'use strict';
{

  // 親要素へのイベント伝搬を試すためにdiv要素にクリックイベントを登録
  document.querySelector('#sample').addEventListener('click', (event) => {
    console.log("DIV");
  });

  // querySelectorは、一番最初のaタグにしか効果なし
  // document.querySelector('a').addEventListener('click', (event) => {
  //   event.preventDefault();
  //   console.log(event.target.href);
  // });

  // 無名関数を利用してaタグ全てにリスナーを登録する
  // document.querySelectorAll('a').forEach(aTag => {
  //   aTag.addEventListener('click', (event) => {
  //       event.preventDefault();
  //       event.stopPropagation();
  //       console.log(event.target.href);
  //   });
  // });

  // 無名関数を利用しないでaタグ全てにリスナーを登録する方法
  function clickATagEvent(event) {
    event.preventDefault();
    console.log(event.target.href);
  }
  const aTagList = document.querySelectorAll('a');
  for (let i = 0; i < aTagList.length; i += 1) {
    aTagList[i].addEventListener('click', clickATagEvent);
  }

}