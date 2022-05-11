function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        item * this.value;
    }, thisArg);
}