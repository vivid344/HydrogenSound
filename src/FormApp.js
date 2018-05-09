import React, {Component} from 'react';

export class FormApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    render() {
        var style = {
                position: "absolute",
                color: "red",
                fontSize: "100px",
                top: "50%",
                left: "10%"
            }
        ;

        return (
            <div>
                <h1>開けてみたいでしょ～？</h1>
                <h1>うん、みたーい！</h1>
                <h1>行きますよー！</h1>
                <h1>はい！</h1>
                <h1>せーのっ！</h1>
                <button class="mdl-button mdl-js-button mdl-button--raised" onClick={this.send.bind(this)}>ペットボトルを開ける
                </button>
                <div style={style}>{this.state.message}</div>
            </div>
        );
    }

    send() {
        sound1();
        this.setState({
            message: "あぁ～！水素の音ォ〜！！"
        });
        sound2();
    }
}

function sound1() {
    var audio = new Audio("http://kina-ko.appspot.com/toy/suiso/a_bottle_m64.mp3?20180405");
    audio.play();
}

function sound2() {
    var audio = new Audio("http://kina-ko.appspot.com/toy/suiso/a_oto_m64.mp3?20180405");
    audio.play();
}