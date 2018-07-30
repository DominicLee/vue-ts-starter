export default class BasicModel {

  constructor(_configObject:any) {
    this.mapProperties(_configObject);
  }

  private mapProperties(_configObject:any) {
    Object.assign(this || {}, _configObject);
  }

}