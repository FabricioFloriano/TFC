import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { afterEach, describe } from 'mocha';
import TeamsModel from '../database/models/TeamsModel';
import { app } from '../app';


chai.use(chaiHttp);
const { expect } = chai;


describe('Testando Rotas Teams', function () {
    afterEach(function () {
        sinon.restore();
    });

    describe('GET: Pegando um team', function(){
        it('should return all teams', async function () {

        const teams: any[] = [{ id: 2, team_name: 'Bahia' }];
        const findAllStub = sinon.stub(TeamsModel, 'findAll').resolves(teams);

        const Response = await chai.request(app).get('/teams');

        expect(Response.status).to.equal(200);
        expect(Response.body).to.deep.equal(teams);

        findAllStub.restore();
        });
    });

    describe('GET /teams/:id', function () {
        it('should return a team by id', async function () {
          // Arrange
          const team: any = { id: 1, team_name: 'São Paulo' };
          const findOneStub = sinon.stub(TeamsModel, 'findOne').resolves(team);
    
          // Act
          const response = await chai.request(app).get('/teams/1');
    
          // Assert
          expect(response.status).to.equal(200);
          expect(response.body).to.deep.equal(team);
    
          // Restore stub
          findOneStub.restore();
        });
      });


});