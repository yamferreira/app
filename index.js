const { select } = require ('@inquirer/prompts')

const start = async () => {
    while(true){
        
        const opcao = await select ({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "Cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"

                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "Listar":
                console.log("Vamos listar")
                break
            case "sair":
                console.log("Até a proxima!")
                return
        }

    }
   
    }

start() 