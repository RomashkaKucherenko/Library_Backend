const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const bookRouter = require('./routes/book')

const app = express()
app.use(
	cors({
		origin: true,
		methods: ['GET', 'POST'],
	}),
)

// view engine setup

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/book', bookRouter)

module.exports = app
