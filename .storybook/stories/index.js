import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Tag from '~/components/bl-tag.vue';

storiesOf('Button', module)
    .add('as a component', () => ({
        components: { Tag },
        template: '<tag>a</tag>'
    }));