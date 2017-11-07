import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {}
}
const getters = {
    notes: state => state.notes,
    activeNote: state => state.activeNote
}
const actions = {
    addNote ({ commit }) {
        commit('ADD_NOTE')
    },
    toggleFavorite ({ commit }) {
        commit('TOGGLE_FAVORITE')
    },
    deleteNote ({ commit }) {
        commit('DELETE_NOTE')
    },
    editNote ({ commit }, text) {
        commit('EDIT_NOTE', text)
    },
    updateActiveNote ({ commit }, note) {
        commit('UPDATE_ACTIVENOTE', note)
        console.log(note)
    }
}
const mutations = {
    ADD_NOTE (state) {
        var n = state.notes.length
        const newNote = {
            text:"new Note" + n,
            id: n,
            content: '',
            favorite:false
        }
        state.notes.push(newNote)
        state.activeNote = newNote
    },
    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },
    DELETE_NOTE (state, activeNote) {
        for (var i = 0;i<state.notes.length;i++) {
            if(state.notes[i] == state.activeNote)
            state.notes.splice(i, 1)
        }
        state.activeNote = state.notes[0]
    },
    EDIT_NOTE (state, text) {
        state.activeNote.content = text
    },
    UPDATE_ACTIVENOTE (state, note) {
        state.activeNote = note
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})