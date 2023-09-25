import * as sinon from 'sinon';
import * as chai from 'chai';
import MatchesService from '../service/MatchesService';
import MatchesController from '../controllers/MatchesController';

// @ts-ignore
import chaiHttp = require('chai-http');

import { describe, it, afterEach } from 'mocha';
import { app } from '../app';
import MatchesModel from '../database/models/Matchers';

chai.use(chaiHttp);

const { expect } = chai;

const sampleMatches = [
  new MatchesModel({
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
  }),
  new MatchesModel({
    id: 41,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
  }),
];

describe('Matches Route Tests', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should return status 200 and all matches', async () => {
    // Arrange
    const findAllStub = sinon.stub(MatchesModel, 'findAll').resolves(sampleMatches);

    // Act
    const response = await chai.request(app).get('/matches');

    // Assert
    expect(response.status).to.equal(200);
    // expect(response.body).to.be.equal(sampleMatches);

    // Restore stub
    findAllStub.restore();
  });

  it('should return status 200 for a finished match', async () => {
    // Act
    sinon.stub(MatchesModel, 'findOne').resolves(sampleMatches[0] as any);
    const { status, body } = await chai.request(app).get('/matches?inProgress=false');

    // Assert
    expect(status).to.be.equal(200);
    expect(body).to.be.an('array');
  });

  it('should return status 200 for an ongoing match', async () => {
    // Act
    sinon.stub(MatchesModel, 'findOne').resolves(sampleMatches[1] as any);
    const { status, body } = await chai.request(app).get('/matches?inProgress=true');

    // Assert
    expect(status).to.be.equal(200);
    expect(body).to.be.an('array');
  });

  it('should return status 404 for a match not found', async () => {
    // Act
    sinon.stub(MatchesModel, 'findOne').resolves(null);
    const { status, body } = await chai.request(app).get('/matches/1');

    // Assert
    expect(status).to.be.equal(404);
    expect(body).to.be.an('object');
  });

  describe('Matches Controller Tests', () => {
    let matchesController: MatchesController;
    let matchesService: MatchesService;

    beforeEach(() => {
      matchesService = new MatchesService();
      matchesController = new MatchesController(matchesService);
    });


  afterEach(function () {
    sinon.restore();
  });

  it('should return status 200 for finishing a match', async () => {
    // Arrange
    const finishMatchStub = sinon.stub(matchesService, 'finishMatch').resolves();

    // Act
    const response = await matchesController.finishMatch({ params: { id: 1 } } as any, {} as any);

    // Assert
    expect(status).to.be.equal(200);
    // expect(response.body).to.be.an('object');

    // Restore stub
    finishMatchStub.restore();
  }
  );

  it('should return status 200 for updating a match', async () => {
    // Arrange
    const updateMatchStub = sinon.stub(matchesService, 'updateMatch').resolves();


    // Act
    const response = await matchesController.updateMatch({ params: { id: 1 }, body: { homeTeamGoals: 1, awayTeamGoals: 1 } } as any, {} as any);

    // Assert
   expect(response.status).to.be.equal(200);
      // expect(response.body).to.be.an('object');

      updateMatchStub.restore();
    }
    );

  });
});