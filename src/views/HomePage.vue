<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          JSON Generator
        </ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar v-model='searchTerm' placeholder="Search"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <RecycleScroller
        class="scroller"
        :items=filteredList()
        :item-size="70"
        key-field="id"
        v-slot="{ item }"
      >
        <ion-item>
          <ion-thumbnail slot="start">
            <ion-img :src="item.photo" :alt="item.text"></ion-img>
          </ion-thumbnail>
          <ion-label>
            <h2>Item {{ item.id }}</h2>
            <p>{{ item.text }}</p>
          </ion-label>
        </ion-item>
      </RecycleScroller>
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
  IonPage,
  IonSearchbar,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/vue"
import { defineComponent, ref } from 'vue';
import useJson from '@/composables/useJson'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonImg,
    IonLabel,
    IonPage,
    IonSearchbar,
    IonThumbnail,
    IonTitle,
    IonToolbar,
  },

  setup() {
    
    const { generateJson } = useJson()
    const searchTerm = ref('');
    const jsonData = generateJson()

    const filteredList = () => {
      return jsonData.filter((photo) => {
        return photo.text.toLowerCase().includes(searchTerm.value.toLowerCase()) || photo.id.includes(searchTerm.value)
      })
    }

    return {
      searchTerm,
      filteredList,
    }
  }
});
</script>

<style scoped>
.scroller {
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
}

</style>