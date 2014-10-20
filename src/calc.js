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
    getNumsArrayWithDelim: function (res, delim) {
        var array = res
        var aux = delim
        if (delim.indexOf('[') >= 0 && delim.indexOf(']') > 2) {
            aux = delim.substring(0, delim.length - 1).substring(1)
        }
        if (delim.indexOf('][') >= 0) {
            aux = delim.substring(0, delim.length - 1).substring(1).split('][')
            for (var i = 0; i < aux.length; i++) {
                while (array.indexOf(aux[i]) > 0) {
                    array = array.replace(aux[i], '][')
                }
            }
        }
        while (array.indexOf(aux) > 0) {
            array = array.replace(aux, '][')
        }
        return array.split('][')
    },
    add: function (text) {
        var res = text ? text : 0;
        var array
        if (res != 0) {
            if (res.indexOf('//') < 0) {
                array = this.getNumsArray(res)
                res = this.calculateSum(array);
            } else {
                array = this.getNumsArrayWithDelim(this.getText(res), this.getDelim(res))
                res = this.calculateSum(array);
            }
        }
        return res
    }
}

module.exports = calc