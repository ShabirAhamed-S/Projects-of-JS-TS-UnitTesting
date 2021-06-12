const mysql = require('mysql')
let connection

exports.init = (config) => {
	connection = mysql.createConnection(config)
}

exports.query = (sql, params) => {
	return new Promise((resolve, reject) => {
		connection.query(sql, params, (error, result) => {
			if (error) {
				return reject(error)
			}
			resolve(result)
		})
	})
}