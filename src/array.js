// 阵列堆栈

function Stack() {
    this._top = 0;
    this._val = [];
}

Stack.prototype = {
    constructor: Stack,

    empty: function () {
        return this._top === 0;
    },

    // 将数据放入堆叠的顶端，堆叠顶端top指标加一
    push: function (item) {
        this._val.push(item);
        
        this._top++;
    },

    // 将顶端数据资料输出，堆叠顶端资料减一
    pop: function () {
        if (this.empty()) {
            // can not pop
            return;
        }

        var v = this._val.pop();

        this._top--;

        return v;
    }
};

module.exports = Stack;