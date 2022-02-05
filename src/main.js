
import { createApp } from 'vue';
import App from './App.vue';
import Vuex from "vuex";
import PrimeVue from 'primevue/config';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const app = createApp(App);

app.component('DataTable', DataTable);
app.component('Column',  Column);
app.component('Toast', Toast);
app.component('ToastService', ToastService);
app.component('Button',  Button);
app.component('Toolbar',  Toolbar);
app.component('Dialog',  Dialog);
app.component('Card', Card);
app.component('InputText',  InputText);
app.component('Editor', Editor);

app.use(PrimeVue).use(ToastService).use(Vuex).mount('#app');
