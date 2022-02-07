describe('Cloud Functions', () => {
  let myFunctions: any;
  beforeEach(async () => {
    myFunctions = await require('../src');
  });

  it('print outs the error message when received JSON is blank', done => {
    const req = {} as Request;

    const res = {
      send: (object: any) => {
        expect(object).toStrictEqual('Hello, World!');
        done();
      },
    };

    myFunctions.index(req, res);
  });
});
