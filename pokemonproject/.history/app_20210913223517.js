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
                
            }
        }
    }




}