require('dotenv').config();
const request = require('supertest');
const { app } = require('../server');
const articles = require( '../controllers/blog_controller')


// Test if Jest is working
describe('Test jest', () => {
    it('1 = 1', () => {
      expect(1).toBe(1);
    });
});

// Test if the dummy data has all neded Propertys
describe('Data has title and description', () => {
  it('Title, Description ', () => {
    articles.articles.forEach(article => {
      expect(article).toHaveProperty('title');
      expect(article).toHaveProperty('description');
    });
  });
});


//Test env dependenses
describe('Data has title and description', () => {
  const PORT = process.env.PORT
  it('Title, Description ', () => {
    expect(PORT).not.toBeUndefined();
  });
});
