import { mount } from '@vue/test-utils'
import Component from '../src/components/SplitInput.vue';

describe('SplitInput Mount', () => {
  const wrapper = mount(Component);

  it('is instantiated', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('... mounts props with defaults', () => {    
    expect(wrapper.vm.label).toBe('Enter a value');
    expect(wrapper.vm.placeholder).toBe('');
    expect(wrapper.vm.defaultVal).toBe('');
    expect(wrapper.vm.busy).toBe(false);
  })  

  it('... can set props correctly', () => {    
    wrapper.setProps({
        label: 'I am a label',
        placeholder: 'placeholder text',
        defaultVal: 'www.google.com',
        busy: true
    })

    expect(wrapper.vm.label).toBe('I am a label');
    expect(wrapper.vm.placeholder).toBe('placeholder text');
    expect(wrapper.vm.defaultVal).toBe('www.google.com');
    expect(wrapper.vm.busy).toBe(true);
  })    
})

