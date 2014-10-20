var calc = {
    getNumsArray: function (res) {
        return res.replace('\n', ',').split(',');
    },
    calculateSum: function (array) {
        var res = 0
        for (var i = 0; i < array.length; i++) {
            res += parseInt(array[i])
        }
        return res
    },
    add: function (text) {
        var res = text ? text : 0;
        if (res != 0) {
            var array = this.getNumsArray(res)
            res = this.calculateSum(array);
        }
        return res
    }
}

module.exports = calc