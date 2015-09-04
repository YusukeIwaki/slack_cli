# slack_cli
Slackボット作成に便利なツールキットです。

## How to install?

```
cd path/anywhere

npm install slack_botkit
cd node_modules/slack_botkit

#-- usage --
# ./slack post \#hoge_channel some message
```

## Configure

環境変数を設定しておくと、毎回指定しなくてもいいので楽です。
* SLACK_API_TOKEN ・・・デフォルトのAPIトークン
* SLACK_API_USER ・・・デフォルトのusername

APIトークンは [このへん](https://api.slack.com/web) から取得してください。


## Let's try!

Hello
```
slack post \#hoge_channel --username=hogehogebot こんにちは！ hogehoge bot です！
```


## コマンドラインオプション

### slack post
* `--token` **・・・トークン（デフォルト値は $SLACK_API_TOKEN ）**
* `-u`, `--username` **・・・投稿時に使うユーザー名（デフォルト値は $SLACK_API_USER ）**
* `--icon` ・・・投稿時に使うアイコンURL

### slack observe
* `--token` **・・・トークン（デフォルト値は $SLACK_API_TOKEN ）**
* `-e`, `--exec`, `--callback` ・・・コールバック関数のjsファイルを指定する

### slack reaction
* `--token` **・・・トークン（デフォルト値は $SLACK_API_TOKEN ）**
