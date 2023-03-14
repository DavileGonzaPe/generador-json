<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          JSON Generator
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-for="(item, index) in jsonData" :key="index">
          <ion-thumbnail slot="start">
            <ion-img :src="item.photo" :alt="item.text"></ion-img>
          </ion-thumbnail>
          <ion-label>
            <h2>Item {{ item.id }}</h2>
            <p>{{ item.text }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonItem,
  IonImg,
  IonLabel,
  IonList,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/vue"
import { defineComponent } from 'vue';
import useJson from '@/composables/useJson'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonImg,
    IonLabel,
    IonList,
    IonPage,
    IonThumbnail,
    IonTitle,
    IonToolbar,
  },

  setup() {
    
    const { generateJson } = useJson()
    const jsonData = generateJson()

    return {
      jsonData,    
    }
  }
});
</script>