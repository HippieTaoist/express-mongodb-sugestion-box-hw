var express = require('express');
var router = express.Router();
var suggestionController = require('./controller/suggestionController');

//get home page
router.get('/', function (req, res) {
    suggestionController.getAllSuggestions({},
        function (err, foundSuggestion) {
            if (err) {
                res
                    .status(500)
                    .json({
                        message: "Something went wrong",
                        error: err.message
                    })
            } else {
                res
                    .json({
                        message: "Success",
                        foundSuggestion: foundSuggestion
                    })
            }
        })
})

router.get('/get-single-suggestion/:id', function (req, res) {
    suggestionController.getSingleSuggestion(req.params.id, function (err, foundSuggestion) {
        if (err) {
            res.status(500).json({
                message: "something went wrong",
                error: err.message
            })
        } else {
            res.json({
                message: "Success",
                foundSuggestion: foundSuggestion
            })
        }

    })
})

router.post('/create-suggestion', function (req, res) {
    suggestionController.createSuggestion(req.body, function (err, savedSuggestion) {
        if (err) {
            res.status(500).json({
                message: "something went wrong",
                error: err.message
            })
        } else {
            res.json({
                message: "Success",
                savedSuggestion
            })
        }
    })

})

router.put('/update-suggestion-by-id/:id', function (req, res) {
    suggestionController.updateSuggestion(req.params.id, req.body, function (err, updatedSuggestion) {
        if (err) {
            res.status(500).json({
                message: "Something went wrong",
                error: err.message
            })
        } else {
            res.json({
                message: "Success",
                updatedSuggestion
            })
        }
    })

})

router.delete('/delete-suggestion-by-id/:id', function (req, res) {
    suggestionController.deleteSuggestion(req.params.id, function (err, deletedSuggestion) {
        if (err) {
            res.status(500).json({
                message: "Something went wrong",
                error: err.message
            });
        } else {
            res.json({
                message: "Success",
                deletedSuggestion
            })
        }
    })
})

router.get('/by-author-suggestion/', function (req, res) {
    suggestionController.getSuggestionsByAuthor(req.query, function (err, author) {
        if (err) {
            res.status(500).json({
                message: "Something went wrong",
                error: err.message
            })
        } else {
            res.json({
                message: "Success",
                "author": author,
            })
        }
    })
})

module.exports = router;