
var SettingController = BaseController.extend({
    configuracoes: null,

    init:function($scope, $http, Configuracoes){
        this.configuracoes = new Configuracoes();
        this._super($scope, $http);
    },

    defineScope:function() {
        var self = this;
        this.configuracoes.getConfiguracoes(1).then(function(){
            console.log(self.configuracoes.configuracoes);
        })
    }
});

SettingController.$inject = ['$scope','$http','Configuracoes'];

