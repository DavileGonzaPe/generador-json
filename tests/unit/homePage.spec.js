import { mount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'
import useJson from '@/composables/useJson'

describe('useJson', () => {
  it('debe generar una array de 4000 elementos', () => {
    const { generateJson } = useJson()
    const jsonData = generateJson()
    expect(jsonData.length).toBe(4000)
  })
})

describe('HomePage', () => {
  it('debe renderizar una lista con items', async () => {
    const wrapper = mount( HomePage )
    await wrapper.vm.$nextTick();
    const items = wrapper.findAll('ion-item')
    expect(items.length).toBeGreaterThan(0)
  })

  it('debe filtrar elementos según el término de búsqueda', async () => {
    const wrapper = mount( HomePage )
    const searchbar = wrapper.findComponent('ion-searchbar')
    await searchbar.setValue('lorem')
    const items = wrapper.findAll('ion-item')
    expect(items.length).toBeGreaterThan(0)
  })
})