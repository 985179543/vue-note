<template>
  <div id="app">
    <toolbar></toolbar>
    <note-list></note-list> 
    <editor></editor> 
  </div>
</template>

<script>
import Toolbar from './components/toolbar'
import NoteList from './components/noteList'
import Editor from './components/editor'
export default {
  name: 'app',
  components: {
    Toolbar,
    NoteList,
    Editor
  }
}
</script>

<style type="text/css">
html, #app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
</style>
