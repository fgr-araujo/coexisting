<style src="./planet-style.css" lang="css"></style>

<template>
  <div class="list">
    <button @click="doFilter()">Filtrar</button>
    <table>
      <tr
        v-for="(empresa, idx) in empresas"
        :key="idx">

        <td><i class="fas fa-home"></i> {{ empresa.attributes.idExterno }}</td>
        <td>{{ empresa.attributes.nome }} <i class="fas fa-users"></i></td>
        <td>
          <i class="fas fa-check" v-if="empresa.attributes.ativa"></i>
          <i class="fas fa-times" v-if="!empresa.attributes.ativa"></i>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { of } from 'rxjs'
import { Observables } from '@portal/fetchWithCache'

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
    this.checkObservable()
  },
  methods: {
    checkObservable() {
      Observables.filterFields.subscribe((filter) => {
        console.log('...', filter)
        this.doFilter(filter)
      })
    },
    doFilter (param) {
      // const param = {
      //   id: '',
      //   status: true,
      //   name: ''
      // }

      this.filtrar(param)
    },
    filtrar(param) {
      const filteredList = this.empresasMock.filter((item) => {

        // filtra por status
        if (item.attributes.ativa === param.status) { 
          return item 
        } else if (param.status === '') {
          return this.empresasMock
        }

      })

      this.empresas = filteredList
    }
  }
}
</script>