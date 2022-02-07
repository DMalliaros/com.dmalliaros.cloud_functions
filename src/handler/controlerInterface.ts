export interface Controler {
  handler(req: any): Promise<any>;
}
