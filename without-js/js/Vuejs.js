new Vue({
    el: '#app',
    data: {
        screenNameRoot:"img/screen/screen",   
    },
    methods: {
        screenName: function(index){
            console.log(this.screenNameRoot + index + ".jpg");
            return this.screenNameRoot + index + ".jpg"

        }
    }




})