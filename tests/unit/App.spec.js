import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(App)
    console.log(wrapper)
    expect(wrapper.text()).to.include(msg)
  })
})
