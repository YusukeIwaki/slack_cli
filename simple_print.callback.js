//-----------------------------------------------------
// slack.js用のコールバック
//-----------------------------------------------------
// exports.handleMessage=function(json,args){
//   コールバック処理    
// }   
//
// を実装してください。
//
//-----------------------------------------------------
// 使える関数
//-----------------------------------------------------
//function post(api_token, targetChannel, message, username, usericon):
//
//  メッセージをPostする
//  
//  必須：
//    api_token・・・APIトークン(xoxp-************)
//    targetChannel・・・チャンネル名（#hogehoge 形式）
//    message・・・本文
//  
//  オプショナル：
//    username・・・ユーザ名
//    usericon・・・ユーザのIconURL
//
//
//function reaction(api_token, emoji, targetChannel, targetTimestamp):
//
//  メッセージをPostする
//  
//  必須：
//    api_token・・・APIトークン(xoxp-************)
//    emoji・・・リアクションにつける絵文字
//    targetChannel・・・チャンネル名（#hogehoge 形式）
//  
//  オプショナル：
//    targetTimestamp・・・メッセージのタイムスタンプ
//
//
//function printJS(json)
//
//  JSONをコンソール出力する
//
//  必須：
//    json
//

var Request = require('request');

exports.handleMessage = function(json, api){
    api.printJS(json);
};
