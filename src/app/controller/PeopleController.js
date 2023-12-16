const People = require("../model/People");
const axios = require('axios');
const https = require('https');

class PeopleController {
  async store(req, res) {
    const agent = new https.Agent({
        rejectUnauthorized: false
      });
    
    axios.get('http://swapi.dev/api/people', { httpsAgent: agent }).then( function (response) {
    // handle success
    let data = response.data.results;
    let people; 
    data.forEach(async element => {
        const people = new People({
            name: element.name, 
            heigth: element.height, 
            gender:element.gender
        });

        let data = await People.create(people);
  
     });
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
      
    });

    return res.json({'message':'listagem disponivel para consulta'});
  }
  
  async index(req, res) {
    let query = req.query;

    let data = null; 
    if(typeof query.name != "undefined"){
        data = await People.find({"name":query.name});
    }else{
        data = await People.find({});
    }  
    return res.json(data);  
  }
}

module.exports = new PeopleController();