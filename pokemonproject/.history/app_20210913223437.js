function Dictionary() {

    this.datastore = [];

    this.add = function(key, value) {
        if(key && value) {
            this.datastore.push({
                key: key,
                value: value
            });
            return 
        }
    }




}