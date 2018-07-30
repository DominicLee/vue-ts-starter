import {Vue, Prop} from 'vue-property-decorator';

export default class BasicController extends Vue {

  @Prop(Vue) _vueComponent!: Vue;

  // Lifecycle events

  protected beforeCreate(_passthrough?: any): void {
    console.log(_passthrough)
  }

  protected created(_passthrough: any): void {
    console.log(_passthrough)
  }

  protected beforeMount(_passthrough?: any): void {
    console.log(_passthrough)
  }

  protected mounted(_passthrough: any): void {
    console.log(_passthrough)
  }

  protected beforeUpdate(_passthrough?: any): void {
    console.log(_passthrough)
  }

  protected updated(_passthrough: any): void {
    console.log(_passthrough)
  }

  protected beforeDestroy(_passthrough?: any): void {
    console.log(_passthrough)
  }

  protected destroyed(_passthrough?: any): void {
    console.log(_passthrough)
  }

  // Basic getters

  protected get vueComponent():any {
    return this._vueComponent
  }

  // Basic methods



}