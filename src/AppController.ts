import {Component, Vue, Prop, Provide} from 'vue-property-decorator';
import BasicController from "@controllers/BasicController";

@Component
export default class App extends BasicController {

  @Provide()
  foo = 'foo';

  @Provide()
  bar = 'bar';
}