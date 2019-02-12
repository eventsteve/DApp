const Project = artifacts.require('./DocumentManager.sol')
const project = await Project.deployed()

const people = await project.ping({ from: accounts[0] })