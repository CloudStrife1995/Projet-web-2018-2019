var express = require('express');
var router = express.Router();

const forSale = [
    { id: 1, name: 'Final Fantasy', quantity: 0, image: 'images/final.jpg', price: 999 },
    { id: 2, name: 'Ratchet and Clank', quantity: 0, image: 'images/rachet.jpg', price: 1499 },
    { id: 3, name: 'Dark Souls', quantity: 0, image: 'images/ds.jpg', price: 499 },
    { id: 4, name: 'Zelda', quantity: 0, image: 'images/zelda.png', price: 299 },
    { id: 5, name: 'Mario Kart 8', quantity: 0, image: 'images/mk.jpg', price: 1000 },
    { id: 6, name: 'Gran Turismo', quantity: 0, image: 'images/gt.jpg', price: 1500 },
    { id: 7, name: 'Tekken 7', quantity: 0, image: 'images/tekken7.jpeg', price: 2000 },
    { id: 8, name: 'Sonic', quantity: 0, image: 'images/sonic.png', price: 4000 },
  ]

const ps4g = [
  { id: 1, name: 'Horizon Down', quantity: 0, image: 'images/hrz.jpg', price: 999 },
  { id: 2, name: 'Resident Evils VII', quantity: 0, image: 'images/re.jpg', price: 1499 },
  { id: 3, name: 'The witcher III', quantity: 0, image: 'images/tw3.jpg', price: 499 },
  { id: 4, name: 'Shadow of the colesseus', quantity: 0, image: 'images/sotc.jpg', price: 299 },
  ]

const retro = [
  { id: 2, name: 'Bomberman Wolrd', quantity: 0, image: 'images/bbm.jpg', price: 1499 },
  { id: 3, name: 'Castlevania', quantity: 0, image: 'images/castlevania.jpg', price: 499 },
  { id: 4, name: 'Chrono Trigger', quantity: 0, image: 'images/ct.jpg', price: 299 },
  { id: 5, name: 'Final Fantasy 7', quantity: 0, image: 'images/ff7.jpg', price: 1000 },
  { id: 6, name: 'Killer Instinct', quantity: 0, image: 'images/ki.jpg', price: 1500 },
  { id: 1, name: 'Mario Bros', quantity: 0, image: 'images/marioretro.png', price: 999 },
  { id: 7, name: 'Megaman X', quantity: 0, image: 'images/mgm.jpg', price: 2000 },
  { id: 8, name: 'Pokemon JAUNE', quantity: 0, image: 'images/pkmjaune.jpg', price: 4000 },
]
const items = [
  {

  }
]

router.get('/forSale', (req, res) => {
  res.json(forSale)
})

router.get('/items', (req, res) => {
  res.json(items)
})
router.post('/items', (req, res) => {
  items.push({
    name: req.body.name
  })
  res.send('OK')
})

router.get('/ps4g', (req, res) => {
  res.json(ps4g)
})
router.get('/retro', (req, res) => {
  res.json(retro)
})

router.post('/forSale', (req, res) => {
  forSale.push({
    name: req.body.name
  })
  res.send('OK')
})

router.post('/ps4g', (req, res) => {
  ps4g.push({
    name: req.body.name
  })
  res.send('OK')
})

router.post('/retro', (req, res) => {
  retro.push({
    name: req.body.name
  })
  res.send('OK')
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
