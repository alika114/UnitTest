const control =  require("../controller/control")


describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', control.status);

        it('content', control.content);
        
       

        it('Pcontent', control.Pcontent);


    });

});