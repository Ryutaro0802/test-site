<template>
  <div class="editor">
    <editor-menu-bar :editor="editor">
      <div slot-scope="{ commands, isActive }" class="menubar">
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <BlBoldIcon />
        </button>
        <button class="menubar__button" type="button" @click="showImagePrompt(commands.image)">
          <BlAddPhotoIcon />
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <BlStrikeIcon />
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <BlCodeIcon />
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <!-- <icon name="paragraph"/> -->
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <BlListIcon />
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <BlNumberIcon />
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <BlQuoteIcon />
        </button>
        <button
          class="menubar__button"
          type="button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <!-- <icon name="code" /> -->
        </button>
        <button class="menubar__button" type="button" @click="commands.horizontal_rule">
          <!-- <icon name="hr" /> -->
        </button>
        <button class="menubar__button" type="button" @click="commands.undo">
          <!-- <icon name="undo" /> -->
        </button>
        <button class="menubar__button" type="button" @click="commands.redo">
          <!-- <icon name="redo" /> -->
        </button>
      </div>
    </editor-menu-bar>
    <editor-content class="editor__content" :editor="editor" style="border: 1px solid black;min-height: 100px;" />

    <div class="editor-actions">
      <button type="button">
        Clear
      </button>
    </div>
    <button type="button">
      Set Content
    </button>

    <div class="editor-export">
      <!-- <h3>JSON</h3>
      <pre>
        <code v-html="json" />
      </pre> -->
      <h3>HTML</h3>
      <pre><code>{{ html }}</code></pre>
    </div>
  </div>
</template>

<script>
import BlBoldIcon from '~/components/atoms/icons/BlBoldIcon';
import BlStrikeIcon from '~/components/atoms/icons/BlStrikeIcon';
import BlCodeIcon from '~/components/atoms/icons/BlCodeIcon';
import BlListIcon from '~/components/atoms/icons/BlListIcon';
import BlNumberIcon from '~/components/atoms/icons/BlNumberIcon';
import BlQuoteIcon from '~/components/atoms/icons/BlQuoteIcon';
import BlAddPhotoIcon from '~/components/atoms/icons/BlAddPhotoIcon';

import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  Image,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Link,
  Strike,
  History
} from 'tiptap-extensions';
export default {
  components: {
    EditorContent,
    EditorMenuBar,
    BlBoldIcon,
    BlStrikeIcon,
    BlCodeIcon,
    BlListIcon,
    BlNumberIcon,
    BlQuoteIcon,
    BlAddPhotoIcon
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new Image(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Link(),
          new Strike(),
          new History()
        ],
        content: this.content,
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON();
          this.html = getHTML();
        }
      }),
      json: 'Update content to see changes',
      html: 'Update content to see changes'
    };
  },
  watch: {
    html() {
      console.log('childComponent log: ', this.html);
      this.$emit('input', this.html);
    }
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    showImagePrompt(command) {
      const src = prompt('Enter the url of your image here');
      if (src !== null) {
        command({ src });
      }
    },
    clearContent() {
      this.editor.clearContent(true);
      this.editor.focus();
    },
    setContent() {
      this.editor.setContent({
        type: 'doc',
        content: [{
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'This is some inserted text. 👋'
            }
          ]
        }]
      }, true);
      this.editor.focus();
    }
  }
};
</script>
