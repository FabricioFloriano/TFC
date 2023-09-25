import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { describe, it, afterEach } from 'mocha';
import { app } from '../app';
import MatchesModel from '../database/models/Matchers';

chai.use(chaiHttp);

const { expect } = chai;

const matches = [
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

describe('Matches Rout Test', () => {
  afterEach(function () {
    sinon.restore();
  });

  it('should return status 200 and all matches', async function () {
    // Arrange
    const findAllStub = sinon.stub(MatchesModel, 'findAll').resolves(matches);

    // Act
    const response = await chai.request(app).get('/matches');

    // Assert
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(matches);

    // Restore stub
    findAllStub.restore();
  });
});