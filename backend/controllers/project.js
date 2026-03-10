const User = require('../models/user');
const Project = require('../models/project');

exports.getProject = (req, res, next) => {
    const userId = req.userId
    const projectId = req.params.id

    User
        .findOne({ where: { id: userId } })
        .then((user) => {
            if (!user) {
                res.status(401).json({ message: 'User not found!' })
            }
            return Promise.resolve(user)
        })
        .then((user) => {
            return user.getProjects({ where: { id: projectId } })
        })
        .then((project) => {
            if (!project) {
                res.status(401).json({ message: 'Project not found!', project: {} })
            }
            res.status(200).json({ message: 'Project fetched successfully!', project })
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to fetch project', project: {} })
        })
}

exports.getAllProjects = (req, res, next) => {
    const userId = req.userId;

    User
        .findOne({ where: { id: userId } })
        .then((user) => {
            if (!user) {
                res.status(401).json({ message: 'User not found!' })
            }
            return Promise.resolve(user)
        })
        .then((user) => {
            return user.getProjects()
        })
        .then((projects) => {
            res.status(200).json({ message: "Projects fetched successfully!", projects });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to fetch projects', projects: {} })
        })
}

exports.postCreateProject = (req, res, next) => {
    const userId = req.userId
    const name = req.body.name

    User
        .findOne({ where: { id: userId } })
        .then((user) => {
            if (!user) {
                res.status(401).json({ message: 'User not found!' })
            }
            return Promise.resolve(user)
        })
        .then((user) => {
            return user.createProject({
                userId,
                name
            })
        })
        .then((result) => {
            res.status(201).json({ message: 'Project created successfully', project: result })
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create project', project: {} })
        });
}

exports.postDeleteProject = async (req, res, next) => {
    const projectId = req.params.id;

    try {
        const project = await Project.destroy({ where: { id: projectId } });
        res.status(204).json({ message: 'Project delete successfully!'});
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete project'})
    }
}