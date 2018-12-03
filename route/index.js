const express = require('express');
const router = express.Router();

const Puppy = require('../db/model/puppies');

router.get('/', async (req, res, next) => {
  try {
    const puppies = await Puppy.findAll();
    res.send(puppies);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let puppy = await Puppy.findById(req.params.id);
    if (puppy) {
      res.send(puppy);
    } else {
      res.status(404).send('Puppy not found');
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
    try {
      await Puppy.destroy({ where: { id: req.params.id } });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  });
  

router.post('/', async (req, res, next) => {
  try {
    let puppy = await Puppy.create(req.body);
    res.status(201).send(puppy);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    let updatedPuppyInfo = await Puppy.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.send(updatedPuppyInfo[1]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;