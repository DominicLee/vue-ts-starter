import { Component, Vue, Prop, Provide } from 'vue-property-decorator'

@Component
export default class Welcome extends Vue {

  @Provide()
  foo = 'foo';

  @Provide()
  bar = 'bar';
}