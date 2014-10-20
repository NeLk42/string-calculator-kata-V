var calc = {
    getNumsArray: function (res) {
        return res.replace('\n', ',').split(',');
    },
    throwNegativeError: function (array) {
        var err = 'Negatives not allowed:'
        for (var i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                err += ' ' + array[i]
            }
        }
        throw new Error(err)
    },
    calculateSum: function (array) {
        var res = 0
        for (var i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                this.throwNegativeError(array)
            }
            if (array[i] <= 1000) {
                res += parseInt(array[i])
            }

        }
        return res
    },
    getDelim: function (res) {
        var array = res.split('\n')
        return array[0].substring(2)
    },
    getText: function (res) {
        var array = res.split('\n')
        return array[1]
    },
    getDelimArray: function (res, delim) {
        var array = res
        while (array.indexOf(delim) > 0) {
            array = array.replace(delim, '][')
        }
        return array.split('][')
    },
    add: function (text) {
        var res = text ? text : 0;
        if (res != 0) {
            if (res.indexOf('//')) {
                var array = this.getNumsArray(res)
                res = this.calculateSum(array);
            } else {
                var array = this.getDelimArray(this.getText(res), this.getDelim(res))
                res = this.calculateSum(array);
            }
        }
        return res
    }
}

module.exports = calc