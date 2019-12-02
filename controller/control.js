var chai = require('chai'),
	expect = chai.expect,
    chaiHttp = require('chai-http');

//var should = require('should');
    
const should = chai.should();
	
chai.use(chaiHttp);

var request = chai.request("http://localhost:8080");

exports.status =(done) =>{
    request
			.get('/welcome')
			.end( function (err,res) {
                
				expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
}


//expect(body).to.equal('Hello World');

 exports.content = (done) => {
     request
     .get('/welcome')
     .end(function(err,res){
        console.log('status: '+JSON.stringify(res.body));
        expect(err).to.be.null;
        expect(res.body.text).to.equal('Hello World');
        
        //res.body.should.be.eql('Hello World');
        done();
    });
}


exports.Pcontent = (done) => {
    var msg = { title: 'My Test1', category: 1, description: 'Automated'};
    request
    .post('/test')
    .send(msg)
    .end(function(err,res){
       console.log('status: '+JSON.stringify(res.body));
       expect(err).to.be.null;
       expect(res.body.title).to.equal('My Test2'); //this case will fail
       
       //res.body.should.be.eql('Hello World');
       done();
   });
}