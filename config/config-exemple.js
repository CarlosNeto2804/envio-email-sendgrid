class Config{
    static createConfig(){
        global.config = {
            port: process.env.PORT || 3000,
            email: {
                to: '<<Email de Destino>>',
                apiKey: '<< chave da api do sendgrid>>',
            }
        }
    }
}

module.exports = Config.createConfig()