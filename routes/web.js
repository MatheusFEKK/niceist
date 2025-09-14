import express from "express";
import { databaseConnection } from "../config/database.js";

const router = express.Router();

const response = {
    "messageNoteAdded": "The note has been acquired with success",
    "messageNoteDeleted" : "The note has been deleted with success"
}

router.get('/', (req, res) => {
    databaseConnection.query("SELECT * FROM notes", (error, results, fields) => {
        if (error)
        {
            res.json(error.message);
        }
        if (process.env.API_MODE === "TRUE")
        {
            res.json(results);
        }
        
        res.render('index', {data: results})
    });
});

router.post('/addNote', (req, res) => {
    const note = req.body.noteDescription
    if (note != null)
    {
        databaseConnection.query(`INSERT INTO notes (noteDescription) VALUES ('${note}')`, (error, results, fields) => {
            if (error)
            {
                res.json(error.message);
            }
            if (process.env.API_MODE === "TRUE")
            {
                res.json(results);
            }
                res.redirect('/exnoting');
        });
    }
});

router.get('/deleteNote/:id', (req, res) => {
    const idNote = req.params.id;
    if (idNote != null)
    {
        databaseConnection.query(`DELETE FROM notes WHERE idNote = ${idNote}`, (error, results, fields) => {
            if (error)
            {
                res.json(error);
            }
            if (process.env.API_MODE === "TRUE")
            {
                res.json(results);
            }
                res.redirect('/exnoting');
        });
    }
});

router.post('/editNote/:id/:noteDescription', (req, res) => {
    const idNote = req.params.id;
    const noteDescription = req.params.noteDescription;

    if (idNote != null && noteDescription != null)
    {
        databaseConnection.query(`UPDATE notes SET noteDescription = '${noteDescription}' WHERE idNote = ${idNote}`, (error, results, fields) => {
            if (error)
            {
                res.json(error);
            }
            if (process.env.API_MODE === "TRUE")
            {
                res.json(results);
            }
                res.redirect('/exnoting');
        });
    }
});

router.post('/doneNote/:id', (req, res) => {
    const idNote = req.params.id;

    if (idNote != null)
    {
        databaseConnection.query(`UPDATE notes SET noteChecked = 1 WHERE idNote = ${idNote}`, (error, results, fields) => {
            if (error)
            {
                res.json(error);
            }

            if (process.env.API_MODE === "TRUE")
            {
                res.json(results);
            }
            res.redirect('/exnoting')
        })
    }
});

router.post('/undoneNote/:id', (req, res) => {
    const idNote = req.params.id;

    if (idNote != null)
    {
        databaseConnection.query(`UPDATE notes SET noteChecked = 0 WHERE idNote = ${idNote}`, (error, results, fields) => {
            if (error)
            {
                res.json(error);
            }

            if (process.env.API_MODE === "TRUE")
            {
                res.json(results);
            }
            res.redirect('/exnoting')
        })
    }
});

export default router;