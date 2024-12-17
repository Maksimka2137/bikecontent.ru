import { defineStore } from 'pinia'

export const useContentEnStore = defineStore({
    id: 'contentEnStore',
    state: () => {
        return {
            content: {
                'header': '',
                'body': '',
            }
        }
    },
    actions: {},
    getters: {},
})


