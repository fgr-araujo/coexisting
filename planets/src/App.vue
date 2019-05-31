<template>
  <div>
    <button @click="doFilter()">Filtrar</button>
    <ul>
      <li
        v-for="(empresa, idx) in empresas"
        :key="idx">
        <a v-bind:href="empresa.links.self">{{ empresa.attributes.idExterno }} {{ empresa.attributes.nome }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      empresasMock: [
        {
          "id":"427",
          "type":"empresas",
          "attributes":{
              "nomeFantasia":"",
              "idExterno":"00001",
              "nome":"ALTERDATA TECNOLOGIA EM INFORMATICA LTDA",
              "ativa":true
          },
          "links":{
              "self":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/427"
          }
        },
        {
          "id":"428",
          "type":"empresas",
          "attributes":{
              "nomeFantasia":"ABILITY GESTAO CONTABIL",
              "idExterno":"00002",
              "nome":"SULAMERICA SEGUROS ",
              "ativa":false
          },
          "links":{
              "self":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/428"
          }
        },
        {
          "id":"429",
          "type":"empresas",
          "attributes":{
              "nomeFantasia":"976008000198",
              "idExterno":"00003",
              "nome":"Avon Cosméticos ",
              "ativa":true
          },
          "links":{
              "self":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/429"
          }
        },
        {
          "id":"430",
          "type":"empresas",
          "attributes":{
              "nomeFantasia":"",
              "idExterno":"00004",
              "nome":"Natura Cosméticos Limitada Ltda",
              "ativa":true
          },
          "links":{
              "self":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/430"
          }
        },
        {
          "id":"431",
          "type":"empresas",
          "attributes":{
              "nomeFantasia":"LOCADORA GRILLO E RIBEIRO LTDA ME",
              "idExterno":"00005",
              "nome":"LOCADORA GRILLO E RIBEIRO LTDA ME",
              "ativa":true
          },
          "links":{
              "self":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/431"
          }
        },
        {
          "id":"432",
          "type":"empresas",
          "attributes":{
              "nomeFantasia":"******** 00.803.844/0002-51",
              "idExterno":"00006",
              "nome":"CENTRO DE FORMACAO DE CONDUTORES GENESIS LTDA - ME",
              "ativa":true
          },
          "links":{
              "self":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/432"
          }
        },
        {
          "id":"433",
          "type":"empresas",
          "attributes":{
              "nomeFantasia":"",
              "idExterno":"00007",
              "nome":"SEMENTES DA ZICA!",
              "ativa":false
          },
          "links":{
              "self":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/433"
          }
        },
        {
          "id":"434",
          "type":"empresas",
          "attributes":{
              "nomeFantasia":"",
              "idExterno":"00008",
              "nome":"WilburWright conceicaoDoCastelo / ES",
              "ativa":true
          },
          "links":{
              "self":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/434"
          }
        }
      ],
      empresas: []
    }
  },
  mounted () {
    this.empresas = this.empresasMock
  },
  methods: {
    doFilter () {
      const param = {
        id: "00007",
        status: null,
        name: "Wil"
      }

      this.filtrar(param)

    },
    filtrar(param) {

      const filteredList = this.empresasMock.filter((item) => {

        let isFilteredOk = null

        if ( param.id === '' && param.status === null && param.name === '') {
          return true
        }

        // filtra por status
        if ( param.status !== null && (item.attributes.ativa === param.status)) { 
          isFilteredOk = true
        }

        // filtra por id
        if ( param.id !== '' && (item.attributes.idExterno === param.id && isFilteredOk !== false)) { 
           isFilteredOk = true
        }

        // filtra por nome
        const attributeName = item.attributes.nome.toUpperCase().indexOf(param.name.toUpperCase())

        if (param.name !== '' && (attributeName > -1 && isFilteredOk !== false)) { 
           isFilteredOk = true
        }

        return isFilteredOk 

      })

      this.empresas = filteredList
    }

  }
}
</script>