<template>
    <ckeditor
        v-model="editorData"
        :editor="editor"
        :config="editorConfig"
    ></ckeditor>
</template>

<script lang="ts" setup>
import { type EditorConfig } from '@ckeditor/ckeditor5-core'

const { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } = await import('@ckeditor/ckeditor5-basic-styles')
const { Table, TableToolbar } = await import('@ckeditor/ckeditor5-table')
const editor = (await import('@ckeditor/ckeditor5-editor-classic')).ClassicEditor
const ckeditor = defineAsyncComponent(async () => (await import('@ckeditor/ckeditor5-vue')).default.component)

const editorConfig = {
    plugins: [
        (await import('@ckeditor/ckeditor5-essentials')).Essentials,
        (await import('@ckeditor/ckeditor5-autoformat')).Autoformat,
        Bold,
        Italic,
        Underline,
        Strikethrough,
        Subscript,
        Superscript,
        Code,
        (await import('@ckeditor/ckeditor5-block-quote')).BlockQuote,
        (await import('@ckeditor/ckeditor5-heading')).Heading,
        (await import('@ckeditor/ckeditor5-link')).Link,
        (await import('@ckeditor/ckeditor5-list')).List,
        (await import('@ckeditor/ckeditor5-paragraph')).Paragraph,
        (await import('@ckeditor/ckeditor5-source-editing')).SourceEditing,
        (await import('@ckeditor/ckeditor5-media-embed')).MediaEmbed,
        Table,
        TableToolbar,
        (await import('@ckeditor/ckeditor5-code-block')).CodeBlock,
        (await import('@ckeditor/ckeditor5-alignment')).Alignment,
        (await import('@ckeditor/ckeditor5-indent')).Indent
    ],
    alignment: {
        options: ['left', 'right', 'center', 'justify']
    },
    toolbar: {
        items: [
            'heading',
            '|',
            'sourceEditing',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'subscript',
            'superscript',
            'code',
            'link',
            'insertTable',
            '|',
            'blockQuote',
            'mediaEmbed',
            'codeBlock',
            '|',
            'alignment',
            '|',
            'bulletedList',
            'numberedList',
            'outdent',
            'indent',
            '|',
            'undo',
            'redo'
        ],
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
        image: {},
        indentBlock: {
            offset: 1,
            unit: 'em'
        },
        shouldNotGroupWhenFull: true
    }
} as EditorConfig

interface Props {
    value?: string
}

const props = withDefaults(defineProps<Props>(), {
    value: ''
})

const editorData = ref('')

const emit = defineEmits<(event: 'input', val: string) => void>()

watch(
    () => props.value,
    () => (editorData.value = props.value),
    { immediate: true }
)
watch(editorData, () => emit('input', editorData.value))
</script>

<style lang="scss">
.ck-editor__editable_inline:not(.ck-comment__input *),
.ck-source-editing-area {
    height: 282px;
    overflow-y: auto;
}
</style>
