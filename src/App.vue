<template>
  <div class="container">
    <NavMessages />
    <Toast />
    <div class="card">
      <Toolbar class="p-mb-4">
        <template #left>
          <Button
            label="Enviar Mensaje Nuevo"
            icon="pi pi-plus"
            class="p-button-info p-mr-2"
            @click="openForm"
          />
        </template>
      </Toolbar>
      <DataTable
        :value="messages"
        :paginator="true"
        :rows="5"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products "
      >
        <template #header>
          <div
            class="
              table-header
              p-d-flex p-flex-column p-flex-md-row p-jc-md-between
            "
          >
            <h5 class="p-mb-2 p-m-md-0 p-as-md-center">Mensajes</h5>
          </div>
        </template>
        <Column :exportable="false">
          <template #body="slotProps">
            <CardMessage  :contenido="slotProps.data.contenido" :remitente="slotProps.data.remitente"/>
          </template>
        </Column>
      </DataTable>
      <Dialog
        :visible="formDialog"
        :style="{ width: '90%' }"
        header="Formulario"
        :modal="true"
        class="p-fluid"
      >
        <div class="p-field p-col-12 p-md-6">
          <label for="remitente" class="p-mb-3">Remitente</label>
          <InputText
            id="remitente"
            v-model="newMessage.remitente"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !newMessage.remitente }"
          />
          <small class="p-error" v-if="submitted && !newMessage.remitente"
            >Este Campo es obligatorio.</small
          >
        </div>
        <br />
        <div class="p-field ">
          <label for="contenido" class="p-mb-3">Contenido del mensaje</label>
          <br/>
          <Editor  
            id="contenido"
            v-model="newMessage.contenido"
            editorStyle="height: 320px"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !newMessage.contenido }"
          />
          <small class="p-error" v-if="submitted && !newMessage.contenido"
            >Este Campo es obligatorio.</small
          >
        </div>
        <br />
        
        <template #footer>
          <Button
            label="Guardar"
            icon="pi pi-check"
            class="p-button-text"
            @click="save"
          />
          <Button
            label="Cancelar"
            icon="pi pi-times"
            class="p-button-text"
            @click="formDialog = false"
          />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script>
import NavMessages from "@/components/NavMessages";
import CardMessage from "@/components/CardMessage";
import MessageService from "@/services/MessageService";
export default {
  name: "App",
  components: {
    NavMessages,
    CardMessage
  },
  data() {
    return {
      formDialog: false,
      messages: null,
      submitted: false,
      newMessage: {
        contenido: null,
        remitente: null,
      },
    };
  },
  messageService: null,
  created() {
    this.messageService = new MessageService();
  },
  mounted() {
    this.getAll();
  },
  methods: {
    openForm() {
      this.submitted = false;
      this.formDialog = true;
    },
    getAll() {
      this.messageService.getMessages().then((data) => {
        this.messages = data.data;
      });
    },
    save() {
      this.submitted = true;
      this.messageService.saveMessage(this.newMessage).then((data) => {
        if (data.status === 200) {
          this.formDialog = false;
          this.newMessage = {
            contenido: null,
            remitente: null,
          };
          this.$toast.add({severity:'success', summary: 'Success Message', detail:data.data, life: 3000});
          this.getAll();
        }else{
           this.$toast.add({severity: "error", summary: "Error Message", detail: 'Existe algun problema con el micro servicio', life: 3000,});
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
