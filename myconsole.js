class MyConsole {
    historyArray = [];

    constructor() {
        this.historyArray = [];
    }

    log(data) {
        this.historyArray.push(data);
        return data + '';
    }
    history(indexArg = -1) {
        let message = "";
        if (indexArg === -1) {
            for (let index = 0; index < this.historyArray.length; index++) {
                if (index === this.historyArray.length - 1) {
                    if (typeof this.historyArray[index] === 'object') {
                        message = message + JSON.stringify(this.historyArray[index]);
                    } else {
                        message = message + this.historyArray[index];
                    }
                } else {
                    if (typeof this.historyArray[index] === 'object') {
                        message = message + JSON.stringify(this.historyArray[index]) + "\n";
                    } else {
                        message = message + this.historyArray[index] + "\n";
                    }
                }
            }
        } else {
            if (typeof this.historyArray[indexArg] === 'object') {
                message = message + JSON.stringify(this.historyArray[indexArg]);
            } else {
                message = message + this.historyArray[indexArg];
            }
        }
        return message;
    }
    clearHistory() {
        this.historyArray = [];
    }
}