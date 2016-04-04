"use strict";

const Task = require('../models/Task.js');

var storage = Task.getStorage();

exports.getTodos = (req, res) => {
    res.status(200).send({
        content: storage
    });
};

exports.addTodo = (req, res) => {
    console.log('req in addTodo:');
    console.log(req.body);
    var task = new Task(req.body);
    task.save();
    res.status(200).send();
};

exports.deleteTodo = (req, res) => {
    Task.removeTask(req.body.id);
    res.status(200).send();
};

exports.changeTodo = (req, res) => {
    console.log('req in changeTodo: ');
    console.log(req.body);
    var task = Task.changeTask(req.body.id, req.body.text);
    res.status(200).send(task);
};