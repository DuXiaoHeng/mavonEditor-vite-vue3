/**
 * Created by zhy on 2017/4/1.
 */
'use strict';

/**
 * mavonEditor
 * @author hinesboy
 */
import mavonEditor from "./mavon-editor.vue";
import LeftToolbar from "./components/md-toolbar-left.vue";
import RightToolbar from "./components/md-toolbar-right.vue"
const VueMavonEditor = {
    markdownIt: mavonEditor.mixins[0].data().markdownIt,
    mavonEditor: mavonEditor,
    LeftToolbar: LeftToolbar,
    RightToolbar: RightToolbar,
    install: function(Vue) {
        Vue.component('mavon-editor', mavonEditor);
    }
};

export default VueMavonEditor;
