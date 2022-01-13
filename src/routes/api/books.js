const router = require('express').Router();

const Book = require('../../models/Book');

router.get('/test', (req, res) => res.send('Book route testing'));

router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No books found'}));

});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No book found'}));
});

router.post('/', (req, res) => {
    Book.create(req.body)
    .then(book => res.json({ msg: 'Book added successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to add book'}));

});


router.put('/:id', (req, res) => {
    Book.findIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully'}))
        .catch(err => res.status(400).json({ error: 'Unable to update the database'}));
});

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({msg: 'Book Entry deletion successful'}))
        .catch(err => res.status(404).json({error: 'No such book'}));
});


module.exports = router;