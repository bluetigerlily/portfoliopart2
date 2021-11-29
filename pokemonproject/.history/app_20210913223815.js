function Dictionary() {

    this.datastore = [];

    this.add = function(key, value) {
        if(key && value) {
            this.datastore.push({
                key: key,
                value: value
            });
            return this.datastore;
        }
    };

    this.removeAt = function(key) {
        for (var i = 0; i < this.datastore.length; i++) {
            if(this.datastore[i].key === key) {
                this.datastore.splice(this.datastore[i], 1);
                return this.datastore;
            }
        }
        return this.datastore;
    };

    this.findAt = function(key) {
        for (var i = 0; i < this.datastore.length; i++) {
            if(this.datastore[i].key === key) {
                return this.datastore[i].value;
            }
        }
        return this.datastore;
    };


    this.size = function() {
        return this.datastore.length;
    };

}

var dictionary1 = new Dictionary();

dictionary1.add("one", 1);
dictionary1.add("one", 2);
dictionary1.add("one", 3);
dictionary1.add("one", 4);
dictionary1.add("one", 5)