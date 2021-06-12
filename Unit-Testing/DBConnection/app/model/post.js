const database = require('./database')

exports.createTable = () => {
	return database.query(`
		CREATE TABLE IF NOT EXISTS post (
			id int NOT NULL AUTO_INCREMENT,
			title varchar(255) NOT NULL,
			body TEXT NOT NULL,
			slug varchar(255) NOT NULL,
			posted_at TIMESTAMP DEFAULT NOW(),
			PRIMARY KEY (id),
			UNIQUE (slug)
		)
	`)
}

exports.drop = () => {
	return database.query("DROP TABLE IF EXISTS post").then(() => {
	})
}

exports.deleteAll = () => {
	return database.query("DELETE FROM post").then(() => {
		return database.query("ALTER TABLE post AUTO_INCREMENT = 1")
	})
}

exports.add = (params) => {
	return database.query("INSERT INTO post SET ?", params)
		.then((result) => {
			return result.insertId
		})
}

exports.remove = (id) => {
	return database.query("DELETE FROM post WHERE ?", {
		id: id
	}).then((result) => {
		return result.affectedRows
	})
}

exports.getAll = () => {
	return database.query("SELECT * FROM post",)
		.then((result) => {
			return result
		})
}

exports.getBySlug = (slug) => {
	return database.query(`
		SELECT *
		FROM post
		WHERE slug = ?`, slug).then((results) => {
		// console.log('slug', results[0])
		return results[0]
	})
}

exports.update = (id, params) => {
	return database.query(`
		UPDATE post
		SET ?
		WHERE id = ?
	`, [params, id])
}