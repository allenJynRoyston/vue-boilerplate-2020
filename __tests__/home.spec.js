import { shallowMount } from '@vue/test-utils'
import Component from '../src/routes/Home.vue';

describe('App Mount', () => {
    const wrapper = shallowMount(Component, {
        stubs: ['SplitInput', 'ListResults']
    })

    it('is instantiated', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('can parse url correctly', () => {    
        expect(wrapper.vm.validateUrl("www.google.com")).toBe(false)
        expect(wrapper.vm.validateUrl("https://www.google.com")).toBe(true)
    })    
})