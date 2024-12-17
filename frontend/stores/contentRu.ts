import { defineStore } from 'pinia'
export const useContentRuStore = defineStore({
    id: 'contentRuStore',
    state: () => {
        return {
            content: {
                'header': 'Байк-контент',
                'body': '',
            }
        }
    },
    actions: {},
    getters: {},
})


