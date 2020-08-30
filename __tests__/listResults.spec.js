import { mount } from '@vue/test-utils'
import ListResults from '../src/components/ListResults.vue';

describe('ListResults Mount', () => {
  const wrapper = mount(ListResults);

  it('is instantiated', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('can sanitize text correctly', () => {    
    expect(wrapper.vm.sanitize("Unit_Test")).toBe("Unit Test")
  })
})