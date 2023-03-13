

const Main = {
    init: function(){
        this.cacheSelectors()
        this.bindEvents()
        console.log('ok')
    },

    cacheSelectors: function(){
        this.$widhPag = window.innerWidth
        this.$heightPag = window.innerHeight
        this.$botaoSim = document.querySelector('#botao_sim')
        this.$botaoNao = document.querySelector('#botao_nao')
    },

    bindEvents: function(){
        this.$heightPag.onchange =  this.cacheSelectors()
        this.$widhPag.onchange = this.cacheSelectors()
        this.$botaoSim.onclick = this.Events.mudarPosicao.bind(this)
        this.$botaoSim.onmouseover = this.Events.mudarPosicao.bind(this)
        this.$botaoNao.onclick = this.Events.sempreSoube
    },

    Events:{
        mudarPosicao: function(e){
            botao = e.target
            botao.style.position = 'absolute'
            console.log(botao)
            botao.style.left = Math.floor(Math.random() * (this.$widhPag - 50)) + 'px'
            botao.style.top = Math.floor(Math.random() * (this.$heightPag - 50)) + 'px'
        },

        sempreSoube: function(e){
            console.log(e)
            alert('Sempre soube')
        }
    }
}

Main.init()