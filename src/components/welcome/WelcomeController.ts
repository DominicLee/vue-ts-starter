import { Component, Vue, Provide } from 'vue-property-decorator'
import BasicController from "@controllers/BasicController";

@Component
export default class Welcome extends BasicController {

  protected mounted():void {
    super.mounted('Super mounted');
    console.log('I mounted')
  }
}