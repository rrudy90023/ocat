'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Article = mongoose.model('Article');

/**
 * Globals
 */
var user;
var article;

/**
 * Test Suites
 */
describe('<Unit Test>', function() {
  describe('Model Article:', function() {
    beforeEach(function(done) {
      user = new User({
        name: 'Full name',
        email: 'test@test.com',
        username: 'user',
        password: 'password'
      });

      user.save(function() {
        article = new Article({
          title: 'Article Title',
          content: 'Article Content',
          potato: 'Article Potato',
          eggplant: 'Article Eggplant',
          squash: 'Article Squash',
          cactus: 'Article Cactus',
          total: 'Article Total',
          user: user
        });

        done();
      });
    });

    describe('Method Save', function() {
      it('should be able to save without problems', function(done) {
        return article.save(function(err) {
          should.not.exist(err);
          article.title.should.equal('Article Title');
          article.content.should.equal('Article Content');
          article.potato.should.equal('Article Potato');
          article.eggplant.should.equal('Article Eggplant');
          article.squash.should.equal('Article Squash');
          article.cactus.should.equal('Article Cactus');
          article.total.should.equal('Article Total');
          article.user.should.not.have.length(0);
          article.created.should.not.have.length(0);
          done();
        });
      });

      it('should be able to show an error when try to save without title', function(done) {
        article.title = '';

        return article.save(function(err) {
          should.exist(err);
          done();
        });
      });

      it('should be able to show an error when try to save without content', function(done) {
        article.content = '';

        return article.save(function(err) {
          should.exist(err);
          done();
        });
      });


      it('should be able to show an error when try to save without potato', function(done) {
        article.potato = '';

        return article.save(function(err) {
          should.exist(err);
          done();
        });
      });


      it('should be able to show an error when try to save without eggplant', function(done) {
        article.eggplant = '';

        return article.save(function(err) {
          should.exist(err);
          done();
        });
      });


      it('should be able to show an error when try to save without squash', function(done) {
        article.squash = '';

        return article.save(function(err) {
          should.exist(err);
          done();
        });
      });



      it('should be able to show an error when try to save without cactus', function(done) {
        article.cactus = '';

        return article.save(function(err) {
          should.exist(err);
          done();
        });
      });



      it('should be able to show an error when try to save without total', function(done) {
        article.total = '';

        return article.save(function(err) {
          should.exist(err);
          done();
        });
      });



      it('should be able to show an error when try to save without user', function(done) {
        article.user = {};

        return article.save(function(err) {
          should.exist(err);
          done();
        });
      });



    });

    afterEach(function(done) {
      article.remove();
      user.remove();
      done();
    });
  });
});
