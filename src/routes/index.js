import express from 'express';
import axios from 'axios';

export function setRoutes(app) {
    app.get('/', async (req, res) => {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=10');
            const users = response.data.results;
            res.render('index', { users });
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).send('Internal Server Error');
        }
    });
}