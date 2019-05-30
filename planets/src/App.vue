<template>
  <div class="testando">
    <ul>
      <li
        v-for="(empresa, idx) in empresas.data"
        :key="idx">
        <a v-bind:href="empresa.links.self">{{ empresa.attributes.idExterno }} {{ empresa.attributes.nome }}</a>
      </li>
    </ul>
  </div>
</template>

<script>

var empresas = {
   "data":[
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
            "ativa":true
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
            "ativa":true
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
   "links":{
      "first":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/?page[limit]=9999&filter[empresas][ativa][EQ]=true",
      "last":"http://collect-release.interno.pack.alterdata.com.br/api/v1/empresas/?page[limit]=9999&filter[empresas][ativa][EQ]=true",
      "next":null,
      "prev":null
   },
   "meta":{
      "totalResourceCount":298
   }
}

export default {
  data () {
    return {
      empresas: empresas
    }
  },
  methods: {}
}
</script>